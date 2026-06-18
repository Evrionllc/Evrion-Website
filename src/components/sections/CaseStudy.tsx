"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ProjectVisual from "@/components/ui/ProjectVisual";
import { type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * Project case-study body: a sticky section index on the left that scroll-spies
 * the narrative on the right, followed by the supporting imagery gallery.
 * Nav links are plain anchors so Lenis (anchors: true) smooth-scrolls them.
 */
export default function CaseStudy({ project }: { project: Project }) {
  const { sections, gallery } = project;
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Highlight the section nearest the top of the viewport as you scroll.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      // top-anchored band so a section counts as "active" once it reaches it
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );

    const nodes = Object.values(sectionRefs.current).filter(Boolean) as HTMLElement[];
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sections]);

  const wide = gallery.filter((g) => g.span === "wide");
  const tiles = gallery.filter((g) => g.span !== "wide");

  return (
    <section aria-label={`${project.title} case study`} className="relative py-20 sm:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky section index */}
          <aside className="lg:col-span-3">
            <nav
              aria-label="Case study sections"
              className="top-28 lg:sticky lg:self-start"
            >
              <p className="mb-6 font-mono text-xs tracking-[0.3em] text-faint uppercase">
                {"// "}Index
              </p>
              <ul className="flex flex-col gap-1 border-l border-line">
                {sections.map((section) => {
                  const isActive = active === section.id;
                  return (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className={cn(
                          "-ml-px flex items-center gap-3 border-l-2 py-3 pl-4 text-sm transition-colors duration-300 lg:py-2",
                          isActive
                            ? "border-mint text-foreground"
                            : "border-transparent text-muted hover:text-foreground"
                        )}
                      >
                        <span className="font-mono text-[11px] text-faint">
                          {String(sections.indexOf(section) + 1).padStart(2, "0")}
                        </span>
                        {section.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Narrative */}
          <div className="lg:col-span-8 lg:col-start-5">
            <div className="flex flex-col gap-20 sm:gap-24">
              {sections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  ref={(el) => {
                    sectionRefs.current[section.id] = el;
                  }}
                  className="scroll-mt-32"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-12%" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                      {section.label}
                    </h2>
                    <div className="mt-6 flex flex-col gap-5">
                      {section.body.map((para, i) => (
                        <p
                          key={i}
                          className="max-w-2xl text-base leading-relaxed text-muted"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Supporting imagery */}
        {gallery.length > 0 && (
          <div className="mt-28 sm:mt-36">
            <p className="mb-10 font-mono text-xs tracking-[0.3em] text-mint uppercase">
              {"// "}Gallery
            </p>
            <div className="flex flex-col gap-6 sm:gap-8">
              {wide.map((item, i) => (
                <GalleryFigure
                  key={`wide-${i}`}
                  item={item}
                  project={project}
                  variant={i}
                  className="aspect-[16/9]"
                />
              ))}
              {tiles.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
                  {tiles.map((item, i) => (
                    <GalleryFigure
                      key={`tile-${i}`}
                      item={item}
                      project={project}
                      variant={i + 1}
                      className="aspect-[4/3]"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function GalleryFigure({
  item,
  project,
  variant,
  className,
}: {
  item: { src?: string; caption: string };
  project: Project;
  variant: number;
  className?: string;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-line",
          className
        )}
      >
        <ProjectVisual
          hue={project.hue}
          accent={project.accent}
          src={item.src}
          alt={item.caption}
          variant={variant}
          sizes="(min-width: 1024px) 60vw, 100vw"
        />
      </div>
      <figcaption className="mt-3 font-mono text-xs text-faint">
        {item.caption}
      </figcaption>
    </motion.figure>
  );
}
