"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check, ArrowUpRight, Info } from "lucide-react";
import type { PricingTier } from "@/lib/data";

type PricingTierModalProps = {
  /** The tier to detail, or null when the modal is closed */
  tier: PricingTier | null;
  onClose: () => void;
};

/**
 * Detail modal for a single pricing tier. Surfaces the full scope, timeline,
 * build price, monthly maintenance, and the services typically involved —
 * with clear disclaimers that the figures are guidelines scoped per project.
 * Closes on Escape, backdrop click, or the close button; locks body scroll.
 */
export default function PricingTierModal({
  tier,
  onClose,
}: PricingTierModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!tier) return;

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
  }, [tier, onClose]);

  return (
    <AnimatePresence>
      {tier && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="pricing-modal-title"
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
              {tier.tier}
            </p>
            <h2
              id="pricing-modal-title"
              className="mt-5 max-w-lg font-display text-3xl font-medium tracking-tight sm:text-4xl"
            >
              {tier.name}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              {tier.summary}
            </p>

            {/* key figures */}
            <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              <div className="bg-elevated p-5">
                <dt className="font-mono text-[10px] tracking-[0.25em] text-faint uppercase">
                  Timeline
                </dt>
                <dd className="mt-2 text-lg font-medium tracking-tight">
                  {tier.timeline}
                </dd>
              </div>
              <div className="bg-elevated p-5">
                <dt className="font-mono text-[10px] tracking-[0.25em] text-faint uppercase">
                  Build price
                </dt>
                <dd className="mt-2 text-lg font-medium tracking-tight text-mint">
                  {tier.buildPrice}
                </dd>
              </div>
              <div className="bg-elevated p-5">
                <dt className="font-mono text-[10px] tracking-[0.25em] text-faint uppercase">
                  Maintenance
                </dt>
                <dd className="mt-2 text-lg font-medium tracking-tight">
                  {tier.maintenance.fee}
                </dd>
              </div>
            </dl>

            {/* scope */}
            <div className="mt-8">
              <p className="font-mono text-xs tracking-[0.25em] text-faint uppercase">
                What&apos;s included
              </p>
              <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {tier.scope.map((item) => (
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

            {/* maintenance detail */}
            <div className="mt-8 rounded-2xl border border-line p-5">
              <p className="font-mono text-xs tracking-[0.25em] text-faint uppercase">
                Monthly maintenance · {tier.maintenance.name}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {tier.maintenance.scope}
              </p>
              <p className="mt-3 font-mono text-sm text-foreground">
                {tier.maintenance.fee}
              </p>
            </div>

            {/* services standardly used */}
            <div className="mt-8">
              <p className="font-mono text-xs tracking-[0.25em] text-faint uppercase">
                Services standardly used
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tier.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-widest text-muted uppercase"
                  >
                    {service}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-faint">
                Typical for this tier — the exact mix of services can change from
                one project to the next.
              </p>
            </div>

            {/* pricing disclaimer */}
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-iris/20 bg-iris/5 p-4">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-iris" />
              <p className="text-xs leading-relaxed text-muted">
                These figures are general guidelines to help you plan. Your exact
                price, scope, and timeline are confirmed per project after a short
                scoping call.
              </p>
            </div>

            <Link
              href="/contact"
              onClick={onClose}
              className="group mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-7 text-sm font-medium text-base transition-colors duration-300 hover:bg-mint"
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
