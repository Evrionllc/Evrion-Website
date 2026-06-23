"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, ArrowUp } from "lucide-react";
import { SITE } from "@/lib/data";
import { cn } from "@/lib/utils";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content: `Hi — I'm the ${SITE.name} concierge. Ask me what we build, how we work, rough pricing, or about the projects in our portfolio.`,
};

const STARTERS = [
  "What do you build?",
  "How much does a website cost?",
  "How do you work with clients?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keep the transcript pinned to the latest message.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;

    const next: Msg[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Drop the UI-only greeting; send the real exchange.
        body: JSON.stringify({ messages: next.slice(1) }),
      });

      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null);
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            content:
              data?.error ??
              "Sorry — I couldn't respond just now. You can reach the team via the Contact page.",
          },
        ]);
        return;
      }

      // Stream the reply token-by-token into a new assistant message.
      setMessages((m) => [...m, { role: "assistant", content: "" }]);
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = {
            role: "assistant",
            content: copy[copy.length - 1].content + chunk,
          };
          return copy;
        });
      }
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Sorry — the connection dropped. You can always reach the team via the Contact page.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {/* Launcher */}
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close concierge chat" : "Open concierge chat"}
        aria-expanded={open}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-4 right-4 left-auto z-50 flex h-14 w-14 items-center justify-center rounded-full bg-iris text-base shadow-[0_12px_45px_-8px_rgba(206,137,70,0.7)] ring-1 ring-accent-soft/50 transition-colors duration-300 hover:bg-accent-soft sm:bottom-6 sm:left-6 sm:right-auto"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "x" : "chat"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label={`${SITE.name} concierge`}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 left-auto z-50 flex h-[min(560px,70vh)] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-line bg-elevated shadow-2xl sm:bottom-28 sm:left-6 sm:right-auto"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-line px-5 py-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-iris/15 text-iris">
                <MessageCircle className="h-4 w-4" />
              </span>
              <div>
                <p className="font-display text-sm font-medium leading-tight">
                  {SITE.name} concierge
                </p>
                <p className="font-mono text-[10px] tracking-[0.2em] text-faint uppercase">
                  Usually replies instantly
                </p>
              </div>
            </div>

            {/* Transcript */}
            <div
              ref={scrollRef}
              data-lenis-prevent
              className="flex-1 space-y-4 overflow-y-auto px-5 py-5"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                    m.role === "user"
                      ? "ml-auto bg-iris text-base"
                      : "mr-auto border border-line bg-base text-foreground"
                  )}
                >
                  {m.content || (
                    <span className="inline-flex gap-1">
                      <Dot /> <Dot delay={0.15} /> <Dot delay={0.3} />
                    </span>
                  )}
                </div>
              ))}
              {busy && messages[messages.length - 1]?.role === "user" && (
                <div className="mr-auto max-w-[85%] rounded-2xl border border-line bg-base px-4 py-3">
                  <span className="inline-flex gap-1">
                    <Dot /> <Dot delay={0.15} /> <Dot delay={0.3} />
                  </span>
                </div>
              )}

              {messages.length === 1 && (
                <div className="flex flex-col gap-2 pt-1">
                  {STARTERS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => send(s)}
                      className="self-start rounded-full border border-line px-3.5 py-1.5 text-xs text-muted transition-colors hover:border-iris/40 hover:text-foreground"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-line p-3"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Evrion…"
                maxLength={2000}
                className="flex-1 rounded-full border border-line bg-base px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-faint focus:border-iris/50"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-base transition-colors duration-300 hover:bg-iris disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Dot({ delay = 0 }: { delay?: number }) {
  return (
    <motion.span
      className="inline-block h-1.5 w-1.5 rounded-full bg-faint"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1.2, repeat: Infinity, delay }}
    />
  );
}
