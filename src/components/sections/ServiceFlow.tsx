"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICE_FLOW } from "@/lib/data";

/**
 * Compact, client-facing engagement flow for the Services page — six steps
 * from first contact to handover.
 */
export default function ServiceFlow() {
  return (
    <section aria-label="How we work" className="relative py-20 sm:py-36">
      <div className="container-x">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6 sm:mb-20">
          <SectionHeading
            label="How it works"
            title="From hello to handover"
            className="max-w-2xl"
          />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            The short version of working with us — six steps, no mystery, and
            you stay in control the whole way.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_FLOW.map((step, i) => (
            <motion.article
              key={step.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-base p-8 transition-colors duration-500 hover:bg-elevated sm:p-10"
            >
              <span className="font-mono text-sm text-faint transition-colors duration-300 group-hover:text-mint">
                {step.index}
              </span>
              <h3 className="mt-5 font-display text-2xl font-medium tracking-tight">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
