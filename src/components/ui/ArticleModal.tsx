"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Article } from "@/lib/data";

type ArticleModalProps = {
  /** The article to read, or null when the modal is closed */
  article: Article | null;
  onClose: () => void;
};

/** Human-readable date, e.g. "May 28, 2026". */
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Full-screen reader for a single article: a dimmed, blurred backdrop with a
 * large centered card that scales in. Closes on Escape, on backdrop click, or
 * via the close button; locks body scroll and parks focus on close while open.
 * AnimatePresence keeps the exiting card mounted so it animates out. Mirrors
 * the conventions of ServiceModal.
 */
export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!article) return;

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
  }, [article, onClose]);

  return (
    <AnimatePresence>
      {article && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
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
          <motion.article
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-line bg-elevated p-8 shadow-2xl sm:p-12"
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
              {article.category}
            </p>
            <h2
              id="article-modal-title"
              className="mt-5 max-w-2xl font-display text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl"
            >
              {article.title}
            </h2>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-wide text-faint uppercase">
              <span>{article.author}</span>
              <span aria-hidden="true">·</span>
              <span>{formatDate(article.date)}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readingTime}</span>
            </div>

            <div className="mt-8 border-t border-line pt-8">
              <div className="flex flex-col gap-6 text-base leading-relaxed text-muted sm:text-lg">
                {article.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className={i === 0 ? "text-foreground/90" : undefined}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      )}
    </AnimatePresence>
  );
}
