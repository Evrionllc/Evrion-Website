"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS, TESTIMONIALS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

/**
 * Homepage credibility band — the stat counters and a single featured quote
 * in one calm section. (The full rotating testimonial set lives on /work.)
 */
export default function Proof() {
  const ref = useRef<HTMLDivElement>(null);
  const quote = TESTIMONIALS[0];

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(counter.value));
          },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      aria-label="Proof"
      className="relative overflow-hidden border-y border-line bg-elevated"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-full left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-iris/10 blur-[120px] will-change-transform"
      />

      <div ref={ref} className="container-x relative grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col gap-3 px-2 py-12 sm:px-8 sm:py-16 ${
              i > 0 ? "border-l border-line" : ""
            } ${i === 2 ? "max-lg:border-l-0 max-lg:border-t" : ""} ${
              i === 3 ? "max-lg:border-t" : ""
            }`}
          >
            <p className="font-display text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
              <span data-count={stat.value}>{stat.value}</span>
              <span className="text-gradient">{stat.suffix}</span>
            </p>
            <p className="font-mono text-[11px] tracking-[0.25em] text-muted uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <motion.figure
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="container-x relative border-t border-line py-20 text-center sm:py-28"
      >
        <blockquote className="mx-auto max-w-4xl font-display text-2xl leading-snug font-medium tracking-tight text-balance sm:text-3xl lg:text-4xl">
          “{quote.quote}”
        </blockquote>
        <figcaption className="mt-10">
          <p className="text-sm font-medium">{quote.name}</p>
          <p className="mt-1 font-mono text-xs tracking-widest text-muted uppercase">
            {quote.role}
          </p>
        </figcaption>
      </motion.figure>
    </section>
  );
}
