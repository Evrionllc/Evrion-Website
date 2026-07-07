"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ARTICLES, articleNumber } from "@/lib/data";

/** Short date for cards, e.g. "May 2026". */
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

/**
 * The full blog listing: the most recent post is featured in a wide lead card,
 * with the remaining posts below in a responsive grid. Every card links to its
 * own /blog/[slug] route.
 */
export default function Blog() {
  // Newest first — the lead post is whatever was published most recently.
  const [featured, ...rest] = useMemo(
    () =>
      [...ARTICLES].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );

  return (
    <section aria-label="Blog posts" className="relative py-16 sm:py-24">
      <div className="container-x">
        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={`/blog/${featured.slug}`}
              aria-label={`Read “${featured.title}”`}
              className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-line bg-elevated p-8 text-left transition-colors duration-500 hover:border-mint/30 sm:p-12 lg:flex-row lg:items-center lg:gap-16"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-iris/15 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />
              <div className="relative flex-1">
                <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] uppercase">
                  <span className="text-mint">{featured.category}</span>
                  <span aria-hidden="true" className="text-faint">
                    ·
                  </span>
                  <span className="text-faint">Latest</span>
                </div>

                <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                  {featured.excerpt}
                </p>

                <div className="mt-8 flex items-center gap-3 font-mono text-[11px] tracking-wide text-faint uppercase">
                  <span>{formatDate(featured.date)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featured.readingTime}</span>
                  <span className="ml-auto text-mint">
                    {articleNumber(featured.slug)}
                  </span>
                </div>
              </div>

              <div className="relative mt-10 flex shrink-0 items-center gap-2 font-mono text-xs tracking-[0.2em] text-foreground uppercase lg:mt-0">
                Read the post
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-5 w-5 text-faint transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-mint"
                />
              </div>
            </Link>
          </motion.article>
        )}

        <ul className="mt-6 grid gap-6 sm:mt-8 lg:grid-cols-3">
          {rest.map((article, i) => (
            <motion.li
              key={article.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/blog/${article.slug}`}
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
                    <span className="ml-auto text-mint">
                      {articleNumber(article.slug)}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
