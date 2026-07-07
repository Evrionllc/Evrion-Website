"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import RevealText from "@/components/ui/RevealText";
import { SITE } from "@/lib/data";

const BUDGETS = ["<$1K", "$1-5K", "$5-10K", "$10-20K", "$20K+"];

const inputClasses =
  "w-full border-b border-line bg-transparent py-4 text-base text-foreground placeholder:text-faint transition-colors duration-300 focus:border-mint focus:outline-none";

export default function Contact() {
  const [budget, setBudget] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Posts the form to /api/contact, which relays it to the studio inbox via
  // Resend. See src/app/api/contact/route.ts.
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setError(null);
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""), // honeypot
      budget: budget ?? "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const { error: msg } = await res.json().catch(() => ({ error: "" }));
        throw new Error(msg || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" aria-label="Contact" className="relative overflow-hidden border-t border-line bg-elevated py-20 sm:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-iris/15 blur-[140px] will-change-transform"
      />

      <div className="container-x relative grid gap-20 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="mb-6 font-mono text-xs tracking-[0.3em] text-mint uppercase">
            {"// "}Contact
          </p>
          <h2 className="font-display text-5xl leading-[1.02] font-medium tracking-tight sm:text-6xl lg:text-7xl">
            <RevealText text="Have an idea" />
            <RevealText text="worth building?" />
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted">
            Share your idea. We&apos;ll reply within 24 hours with thoughts on
            scope, approach, and feasibility.
          </p>

          <MagneticButton className="mt-12">
            <a
              href={`mailto:${SITE.email}`}
              className="group -my-2 inline-flex items-center gap-3 py-2 font-display text-2xl font-medium tracking-tight text-foreground transition-colors hover:text-mint sm:text-3xl"
            >
              {SITE.email}
              <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </MagneticButton>

          <div className="mt-14 flex gap-12 font-mono text-xs tracking-widest text-muted uppercase">
            <div>
              <p className="text-faint">Response time</p>
              <p className="mt-2 text-foreground">&lt; 24 hours</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-2xl border border-mint/30 bg-base/60 p-12 text-center"
                role="status"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mint/15">
                  <Check className="h-7 w-7 text-mint" aria-hidden="true" />
                </span>
                <p className="mt-8 font-display text-2xl font-medium tracking-tight">
                  Message received.
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
                  Thanks for reaching out — a member of the team will be
                  in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-2"
              >
                <div className="grid gap-2 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name *"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="Email address *"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="sr-only">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Company"
                    className={inputClasses}
                  />
                </div>

                <fieldset className="mt-8">
                  <legend className="mb-4 font-mono text-xs tracking-[0.25em] text-muted uppercase">
                    Project budget
                  </legend>
                  <div className="flex flex-wrap gap-3">
                    {BUDGETS.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        aria-pressed={budget === b}
                        className={`inline-flex min-h-11 items-center justify-center rounded-full border px-5 text-sm transition-all duration-300 ${
                          budget === b
                            ? "border-mint bg-mint/10 text-mint"
                            : "border-line text-muted hover:border-foreground/30 hover:text-foreground"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className="mt-8">
                  <label htmlFor="message" className="sr-only">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project *"
                    className={`${inputClasses
                      .replace("border-line", "border-foreground/25")
                      .replace("placeholder:text-faint", "placeholder:text-muted")} resize-none`}
                  />
                </div>

                {/* Honeypot — hidden from real users; bots that fill it are dropped. */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="website">Leave this field empty</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                {error && (
                  <p role="alert" className="mt-6 text-sm text-red-400">
                    {error}
                  </p>
                )}

                <MagneticButton className="mt-10 self-start">
                  <button
                    type="submit"
                    disabled={sending}
                    className="group inline-flex h-14 items-center gap-2 rounded-full bg-foreground px-9 text-sm font-medium text-base transition-colors duration-300 hover:bg-mint disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sending ? "Sending…" : "Send message"}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </MagneticButton>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
