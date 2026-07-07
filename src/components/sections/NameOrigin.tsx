"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

/** The story behind the name — its roots in Turkic myth and what it signals. */
export default function NameOrigin() {
  return (
    <section
      aria-label="The story behind our name"
      className="relative overflow-hidden border-t border-line py-20 sm:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[620px] rounded-full bg-iris/10 blur-[150px] will-change-transform"
      />

      <div className="container-x relative grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading label="The Name" title="Why Evrion" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-md text-sm leading-relaxed text-foreground/80 sm:text-[1rem]"
          >
            A name carries intent. Ours reaches back to an old word — and
            forward to what we&apos;re here to build.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-6%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex max-w-2xl flex-col gap-6 text-base leading-relaxed text-foreground/80 sm:text-lg"
        >
          <p>
            Evrion is inspired by{" "}
            <span className="font-medium text-foreground">Evren</span>, a word
            rooted in Turkic mythology and history. Ancient traditions
            associated Evren with a mighty dragon — a symbol of strength, wisdom,
            and transformation.
          </p>
          <p>
            Over time, the word also came to signify the universe itself. This
            dual meaning&mdash;
            <span className="text-gradient">power and possibility</span>, myth
            and discovery&mdash;captures the vision behind our company: building
            technology with the ambition to shape what comes next.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
