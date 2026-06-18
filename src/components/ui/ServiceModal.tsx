"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check, ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data";

type ServiceModalProps = {
  /** The service to detail, or null when the modal is closed */
  service: Service | null;
  onClose: () => void;
};

/**
 * Stripe-style detail modal for a single service: a dimmed, blurred backdrop
 * with a centered card that scales in. Closes on Escape, on backdrop click,
 * or via the close button; locks body scroll and parks focus on close while
 * open. AnimatePresence keeps the exiting card mounted so it animates out.
 */
export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!service) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          // Tell Lenis to leave wheel/touch alone inside the modal so the panel
          // scrolls natively and the page behind it stays put.
          data-lenis-prevent
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
        >
          {/* backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-line bg-elevated p-8 shadow-2xl sm:p-10"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors duration-300 hover:border-foreground/40 hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="font-mono text-xs tracking-[0.3em] text-mint uppercase">
              {"// "}
              {service.index}
            </p>
            <h2
              id="service-modal-title"
              className="mt-5 max-w-lg font-display text-3xl font-medium tracking-tight sm:text-4xl"
            >
              {service.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              {service.overview}
            </p>

            <div className="mt-8">
              <p className="font-mono text-xs tracking-[0.25em] text-faint uppercase">
                What&apos;s included
              </p>
              <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {service.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-foreground/90"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-widest text-muted uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="/contact"
              onClick={onClose}
              className="group mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-7 text-sm font-medium text-base transition-colors duration-300 hover:bg-mint"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
