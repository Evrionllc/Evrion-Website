"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Code2, ArrowUpRight } from "lucide-react";
import ProjectVisual from "@/components/ui/ProjectVisual";
import RevealText from "@/components/ui/RevealText";
import { type Project } from "@/lib/data";
import { preloaderState } from "@/lib/preloader-state";

/** Detail-page header: the main project image, then title + meta row. */
export default function CaseStudyHero({ project }: { project: Project }) {
  const entryDelay = preloaderState.done ? 0.15 : 1.8;

  return (
    <section aria-label={`${project.title} overview`} className="relative">
      <div className="container-x pt-32 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: entryDelay, duration: 0.6, ease: "easeOut" }}
        >
          <Link
            href="/work"
            className="group -my-2 inline-flex min-h-11 items-center gap-2 py-2 font-mono text-xs tracking-[0.2em] text-muted uppercase transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            All work
          </Link>
        </motion.div>
      </div>

      {/* Main / hero picture */}
      <div className="container-x mt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: entryDelay + 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line sm:aspect-[16/9]"
        >
          <ProjectVisual
            hue={project.hue}
            accent={project.accent}
            index={project.index}
            src={project.heroImage}
            alt={`${project.title} — main project image`}
            sizes="100vw"
          />
        </motion.div>
      </div>

      {/* Title + meta */}
      <div className="container-x mt-12 sm:mt-16">
        <p className="mb-5 font-mono text-xs tracking-[0.3em] text-mint uppercase">
          {project.category}
        </p>
        <h1 className="max-w-4xl font-display text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] font-medium tracking-tight">
          <RevealText text={project.title} immediate delay={entryDelay + 0.2} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: entryDelay + 0.5, duration: 0.7, ease: "easeOut" }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {project.description}
        </motion.p>

        {(project.repo || project.liveUrl) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: entryDelay + 0.55, duration: 0.7, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-5 font-mono text-xs tracking-[0.2em] text-muted uppercase transition-colors hover:border-mint hover:text-foreground"
              >
                <Code2 className="h-3.5 w-3.5" />
                View source
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-5 font-mono text-xs tracking-[0.2em] text-background uppercase transition-opacity hover:opacity-90"
              >
                Visit live
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </motion.div>
        )}

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: entryDelay + 0.6, duration: 0.7, ease: "easeOut" }}
          className="mt-10 grid grid-cols-2 gap-x-12 gap-y-8 border-t border-line pt-8 font-mono text-xs tracking-widest uppercase sm:flex sm:flex-wrap sm:gap-16"
        >
          {project.meta.map((item) => (
            <div key={item.label}>
              <dt className="text-faint">{item.label}</dt>
              <dd className="mt-2 text-foreground">{item.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
