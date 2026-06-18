import { GoogleGenAI } from "@google/genai";
import { buildSystemPrompt } from "@/lib/chat-context";

export const runtime = "nodejs";
export const maxDuration = 30;

// ---- Guardrails to bound cost / abuse -------------------------------------
const MAX_MESSAGES = 24; // conversation turns we'll accept
const MAX_CHARS = 2000; // per message
const RATE_LIMIT = 20; // requests
const RATE_WINDOW_MS = 5 * 60_000; // per 5 minutes, per IP

// Gemini model to use; override with GEMINI_MODEL in .env.local.
const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

// Best-effort in-memory limiter. Each serverless instance has its own map, so
// this is a soft guard — swap for a shared store (e.g. Upstash) for a hard cap.
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

type Msg = { role: "user" | "assistant"; content: string };

function isValid(messages: unknown): messages is Msg[] {
  if (!Array.isArray(messages) || messages.length === 0) return false;
  if (messages.length > MAX_MESSAGES) return false;
  return messages.every(
    (m): m is Msg =>
      !!m &&
      typeof m === "object" &&
      ((m as Msg).role === "user" || (m as Msg).role === "assistant") &&
      typeof (m as Msg).content === "string" &&
      (m as Msg).content.length > 0 &&
      (m as Msg).content.length <= MAX_CHARS
  );
}

export async function POST(req: Request) {
  if (!process.env.GEMINI_API_KEY) {
    return Response.json(
      { error: "The concierge isn't configured yet. Please reach out via the Contact page." },
      { status: 503 }
    );
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "anonymous";
  if (rateLimited(ip)) {
    return Response.json(
      { error: "You're sending messages a little fast — give it a moment." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const messages = (body as { messages?: unknown })?.messages;
  if (!isValid(messages)) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  // Gemini labels the assistant role "model"; map our transcript to match.
  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const encoder = new TextEncoder();
  const readable = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        // Gemini occasionally returns a transient 500/503 (model briefly
        // overloaded). Retry the stream setup with backoff before giving up —
        // safe because this runs before any tokens reach the client, so there's
        // nothing to duplicate. (429s are quota/rate limits that won't clear in
        // the retry window, so we don't retry those.)
        let stream: Awaited<ReturnType<typeof ai.models.generateContentStream>>;
        for (let attempt = 0; ; attempt++) {
          try {
            stream = await ai.models.generateContentStream({
              model: MODEL,
              contents,
              config: {
                // The site's own facts; keeps the concierge on-script.
                systemInstruction: buildSystemPrompt(),
                maxOutputTokens: 700,
              },
            });
            break;
          } catch (err) {
            const status = (err as { status?: number })?.status;
            const transient = status === 500 || status === 503;
            if (attempt >= 2 || !transient) throw err;
            // back off: 0.5s, then 1s
            await new Promise((r) => setTimeout(r, 500 * 2 ** attempt));
          }
        }
        // Stream the reply token-by-token; each chunk carries the new text.
        for await (const chunk of stream) {
          const text = chunk.text;
          if (text) controller.enqueue(encoder.encode(text));
        }
      } catch (err) {
        console.error("chat stream error", err);
        controller.enqueue(
          encoder.encode(
            "\n\nSorry — the assistant is briefly busy. Please try again in a moment, or reach the team via the Contact page."
          )
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
