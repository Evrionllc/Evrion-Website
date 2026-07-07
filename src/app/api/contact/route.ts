import { Resend } from "resend";

export const runtime = "nodejs";

// ---- Config ---------------------------------------------------------------
// Where contact-form submissions are delivered.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "contact@evrionllc.com";
// The verified Resend sender. Until evrionllc.com is verified in Resend you can
// use the shared onboarding address "onboarding@resend.dev" for testing.
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Evrion Website <onboarding@resend.dev>";

// ---- Guardrails to bound cost / abuse -------------------------------------
const MAX_LEN = 5000; // hard cap on any single field
const RATE_LIMIT = 5; // submissions
const RATE_WINDOW_MS = 10 * 60_000; // per 10 minutes, per IP

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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
  // Honeypot — real users never fill this hidden field.
  website?: string;
};

function clean(v: unknown): string {
  return typeof v === "string" ? v.trim().slice(0, MAX_LEN) : "";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return Response.json(
      { error: "Too many messages. Please try again shortly." },
      { status: 429 }
    );
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Silently accept spam bots that trip the honeypot.
  if (clean(body.website)) return Response.json({ ok: true });

  const name = clean(body.name);
  const email = clean(body.email);
  const company = clean(body.company);
  const budget = clean(body.budget);
  const message = clean(body.message);

  if (!name || !message || !EMAIL_RE.test(email)) {
    return Response.json(
      { error: "Please provide your name, a valid email, and a message." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return Response.json(
      { error: "The contact form isn't configured yet. Please email us directly." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "—"],
    ["Budget", budget || "—"],
  ];
  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:560px">
      <h2 style="margin:0 0 16px">New contact form submission</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 12px 6px 0;color:#666;white-space:nowrap">${k}</td><td style="padding:6px 0">${escapeHtml(
                v
              )}</td></tr>`
          )
          .join("")}
      </table>
      <p style="margin:20px 0 6px;color:#666;font-size:14px">Message</p>
      <p style="white-space:pre-wrap;font-size:15px;line-height:1.6;margin:0">${escapeHtml(
        message
      )}</p>
    </div>`;

  const text = `New contact form submission

Name: ${name}
Email: ${email}
Company: ${company || "—"}
Budget: ${budget || "—"}

Message:
${message}`;

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `New enquiry from ${name}${company ? ` · ${company}` : ""}`,
    html,
    text,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return Response.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
