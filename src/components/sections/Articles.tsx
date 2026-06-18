"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ArticleModal from "@/components/ui/ArticleModal";
import { ARTICLES, type Article } from "@/lib/data";

/** Short date for cards, e.g. "May 2026". */
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

/** Writing from the studio — each card opens a full reader modal. */
export default function Articles() {
  const [active, setActive] = useState<Article | null>(null);

  return (
    <section aria-label="Writing" className="relative py-20 sm:py-40">
      <div className="container-x">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 sm:mb-20">
          <SectionHeading
            label="Writing"
            title="Notes from the studio"
            className="max-w-2xl"
          />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            What we&apos;ve learned building products — opinions we&apos;re happy
            to be argued out of.
          </p>
        </div>

        <ul className="grid gap-6 lg:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <motion.li
              key={article.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={() => setActive(article)}
                aria-label={`Read “${article.title}”`}
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-elevated p-8 text-left transition-colors duration-500 hover:border-mint/30"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-iris/15 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs tracking-[0.25em] text-mint uppercase">
                      {article.category}
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-5 w-5 text-faint transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-mint"
                    />
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-balance">
                    {article.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {article.excerpt}
                  </p>

                  <div className="mt-8 flex items-center gap-3 border-t border-line pt-5 font-mono text-[11px] tracking-wide text-faint uppercase">
                    <span>{formatDate(article.date)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readingTime}</span>
                  </div>
                </div>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      <ArticleModal article={active} onClose={() => setActive(null)} />
    </section>
  );
}
