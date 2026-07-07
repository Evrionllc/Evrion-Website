"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import RevealText from "@/components/ui/RevealText";
import { type Article } from "@/lib/data";
import { preloaderState } from "@/lib/preloader-state";

/** Human-readable date, e.g. "May 28, 2026". */
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Full-page reader for a single blog post — mirrors the case-study layout. */
export default function ArticleView({ article }: { article: Article }) {
  const entryDelay = preloaderState.done ? 0.15 : 1.8;

  return (
    <article aria-label={article.title} className="relative">
      <div className="container-x pt-32 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: entryDelay, duration: 0.6, ease: "easeOut" }}
        >
          <Link
            href="/blog"
            className="group -my-2 inline-flex min-h-11 items-center gap-2 py-2 font-mono text-xs tracking-[0.2em] text-muted uppercase transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            All posts
          </Link>
        </motion.div>
      </div>

      <header className="container-x mt-8 sm:mt-10">
        <p className="mb-5 font-mono text-xs tracking-[0.3em] text-mint uppercase">
          {"// "}
          {article.category}
        </p>
        <h1 className="max-w-3xl font-display text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] font-medium tracking-tight text-balance">
          <RevealText text={article.title} immediate delay={entryDelay + 0.2} />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: entryDelay + 0.5, duration: 0.7, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-line pt-8 font-mono text-xs tracking-widest text-faint uppercase"
        >
          <span>{article.author}</span>
          <span aria-hidden="true">·</span>
          <span>{formatDate(article.date)}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readingTime}</span>
        </motion.div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: entryDelay + 0.6, duration: 0.8, ease: "easeOut" }}
        className="container-x mt-12 sm:mt-16"
      >
        <div className="flex max-w-2xl flex-col gap-6 text-base leading-relaxed text-muted sm:text-lg">
          {article.body.map((paragraph, i) => (
            <p key={i} className={i === 0 ? "text-foreground/90" : undefined}>
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </article>
  );
}
