"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import PricingTierModal from "@/components/ui/PricingTierModal";
import { PRICING_TIERS, type PricingTier } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * Pricing on the Services page: three featured tiers in highlight cards, then
 * the full Tier 1–8 table below. Every card and row opens a detail modal.
 * All prices are framed as general guidelines, scoped per project.
 */
export default function Pricing() {
  const [active, setActive] = useState<PricingTier | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const featured = PRICING_TIERS.filter((t) => t.featured);

  return (
    <section
      aria-label="Pricing"
      className="relative border-y border-line bg-elevated py-20 sm:py-36"
    >
      <div className="container-x">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 sm:mb-20">
          <div className="max-w-2xl">
            <SectionHeading
              label="Pricing"
              title="Guideline pricing for every stage"
            />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              Same standard, every tier. A $600 landing page gets the same care,
              code, and polish as a $40k platform — it just ships faster, so it
              costs less.
            </p>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            The figures below are general guidelines to help you plan. Your exact
            price and scope are confirmed per project. Here are three of our most
            popular tiers.
          </p>
        </div>

        {/* Featured tiers — Tier 3, 5, 7 */}
        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((tier, i) => (
            <motion.article
              key={tier.tier}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-base/60 p-8 transition-colors duration-500 hover:border-mint/30 sm:p-10"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-iris/15 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />

              <div className="relative flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs tracking-[0.25em] text-mint uppercase">
                    {tier.tier}
                  </p>
                  <span className="rounded-full border border-iris/30 px-3 py-1 font-mono text-[9px] tracking-[0.2em] text-iris uppercase">
                    Popular
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-medium tracking-tight sm:text-3xl">
                  {tier.name}
                </h3>
                <p className="mt-4 font-mono text-lg text-foreground">
                  {tier.buildPrice}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {tier.summary}
                </p>

                <ul className="mt-8 flex flex-col gap-3">
                  {tier.scope.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-10 flex items-center justify-between border-t border-line pt-5">
                <p className="font-mono text-[11px] tracking-[0.2em] text-faint uppercase">
                  Maintenance · {tier.maintenance.fee}
                </p>
                <span className="font-mono text-[11px] tracking-[0.2em] text-mint uppercase transition-transform duration-300 group-hover:translate-x-0.5">
                  View details →
                </span>
              </div>

              {/* full-card click target */}
              <button
                type="button"
                onClick={() => setActive(tier)}
                aria-label={`View details for ${tier.tier}: ${tier.name}`}
                className="absolute inset-0 z-10 cursor-pointer"
              />
            </motion.article>
          ))}
        </div>

        {/* Full tier list — Tier 1–8 */}
        <div className="mt-20 sm:mt-28">
          <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
            All build tiers
          </h3>

          {/* column headers (desktop) */}
          <div className="mt-10 hidden grid-cols-[90px_1.6fr_110px_150px_130px] gap-4 border-b border-line pb-4 font-mono text-[10px] tracking-[0.2em] text-faint uppercase lg:grid">
            <span>Tier</span>
            <span>Package</span>
            <span>Timeline</span>
            <span>Build price</span>
            <span className="text-right">Maintenance</span>
          </div>

          <ul>
            {PRICING_TIERS.map((tier, i) => (
              <motion.li
                key={tier.tier}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6%" }}
                transition={{ duration: 0.5, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group relative border-t border-line last:border-b"
              >
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 bg-gradient-to-r from-iris/10 via-transparent to-transparent transition-opacity duration-500",
                    hovered === i ? "opacity-100" : "opacity-0"
                  )}
                />
                <div className="relative grid items-baseline gap-x-4 gap-y-1 py-6 sm:py-7 lg:grid-cols-[90px_1.6fr_110px_150px_130px]">
                  <p className="font-mono text-xs tracking-[0.2em] text-faint uppercase transition-colors duration-300 group-hover:text-mint">
                    {tier.tier}
                  </p>
                  <div>
                    <h4 className="font-display text-lg font-medium tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-1 sm:text-xl">
                      {tier.name}
                    </h4>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                      {tier.summary}
                    </p>
                  </div>
                  <p className="font-mono text-xs text-muted">
                    <span className="text-faint lg:hidden">Timeline · </span>
                    {tier.timeline}
                  </p>
                  <p className="font-mono text-sm text-foreground">
                    <span className="text-faint lg:hidden">Build · </span>
                    {tier.buildPrice}
                  </p>
                  <p className="font-mono text-xs text-faint transition-colors duration-300 group-hover:text-mint lg:text-right">
                    <span className="lg:hidden">Maintenance · </span>
                    {tier.maintenance.fee}
                  </p>
                </div>

                {/* full-row click target */}
                <button
                  type="button"
                  onClick={() => setActive(tier)}
                  aria-label={`View details for ${tier.tier}: ${tier.name}`}
                  className="absolute inset-0 z-10 cursor-pointer"
                />
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 flex items-start gap-3 text-xs leading-relaxed text-faint">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-iris" />
            <p className="max-w-2xl">
              All prices are general guidelines, not fixed quotes. Final pricing,
              scope, and timeline are determined per project. Select any tier for
              the full breakdown.
            </p>
          </div>
        </div>
      </div>

      <PricingTierModal tier={active} onClose={() => setActive(null)} />
    </section>
  );
}
