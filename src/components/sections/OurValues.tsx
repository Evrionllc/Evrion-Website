"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { VALUES } from "@/lib/data";

/** The principles the studio runs on — its core values, stated up front. */
export default function OurValues() {
  return (
    <section aria-label="Our values" className="relative py-20 sm:py-40">
      <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading label="Our Values" title="What we refuse to compromise" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex max-w-md flex-col gap-5 text-sm leading-relaxed text-muted sm:text-base"
          >
            <p>
              We run on a clear, deliberate sense of how good software gets
              made. These are the principles we hold ourselves to on every
              project, from the first call to the final handoff.
            </p>
            <p>
              Not poster slogans — the actual tiebreakers we use when a decision
              gets hard.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col">
          {VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-[48px_1fr] gap-6 border-t border-line py-8 last:border-b sm:gap-10"
            >
              <span className="font-mono text-sm text-faint transition-colors duration-300 group-hover:text-mint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                  {value.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
