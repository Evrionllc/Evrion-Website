"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import ProjectVisual from "@/components/ui/ProjectVisual";
import StatusPill from "@/components/ui/StatusPill";
import type { LabEntry } from "@/lib/data";

type LabModalProps = {
  /** The lab entry to show, or null when the modal is closed */
  entry: LabEntry | null;
  onClose: () => void;
};

/**
 * Large on-site reader for a Labs entry: artwork header, status/type, the
 * write-up, and an outbound "Visit live" button when the entry has a URL.
 * Mirrors the conventions of ArticleModal (Escape / backdrop / scroll lock).
 */
export default function LabModal({ entry, onClose }: LabModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!entry) return;

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
  }, [entry, onClose]);

  return (
    <AnimatePresence>
      {entry && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lab-modal-title"
          data-lenis-prevent
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.article
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-line bg-elevated shadow-2xl"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-base/40 text-muted backdrop-blur transition-colors duration-300 hover:border-foreground/40 hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            {/* artwork header */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <ProjectVisual
                hue={entry.hue}
                accent={entry.accent}
                alt={entry.title}
                sizes="(min-width: 1024px) 56rem, 100vw"
              />
              <div className="absolute top-5 left-5">
                <StatusPill status={entry.status} />
              </div>
            </div>

            <div className="p-8 sm:p-12">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-[0.2em] text-mint uppercase">
                <span>{entry.kind}</span>
                <span aria-hidden="true" className="text-faint">·</span>
                <span className="text-faint">{entry.type}</span>
                {entry.updated && (
                  <>
                    <span aria-hidden="true" className="text-faint">·</span>
                    <span className="text-faint">Updated {entry.updated}</span>
                  </>
                )}
              </div>

              <h2
                id="lab-modal-title"
                className="mt-5 font-display text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl"
              >
                {entry.title}
              </h2>

              <div className="mt-8 border-t border-line pt-8">
                <div className="flex flex-col gap-6 text-base leading-relaxed text-muted sm:text-lg">
                  {(entry.detail?.overview ?? [entry.blurb]).map((para, i) => (
                    <p key={i} className={i === 0 ? "text-foreground/90" : undefined}>
                      {para}
                    </p>
                  ))}
                </div>

                {entry.detail?.bullets && entry.detail.bullets.length > 0 && (
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {entry.detail.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: entry.accent }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                {entry.href && (
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-7 text-sm font-medium text-base transition-colors duration-300 hover:bg-mint"
                  >
                    Visit live
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-4 py-2 font-mono text-[11px] tracking-wide text-faint uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      )}
    </AnimatePresence>
  );
}
