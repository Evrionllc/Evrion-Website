"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectVisual from "@/components/ui/ProjectVisual";
import StatusPill from "@/components/ui/StatusPill";
import LabModal from "@/components/ui/LabModal";
import { LAB_ENTRIES, type LabEntry } from "@/lib/data";

const GROUPS: {
  group: LabEntry["group"];
  label: string;
  title: string;
  blurb: string;
}[] = [
  {
    group: "demo",
    label: "Live demos",
    title: "Things you can click right now",
    blurb: "Working demos and sandboxes — open one and poke at it.",
  },
  {
    group: "ongoing",
    label: "On the bench",
    title: "What we're building right now",
    blurb: "Active work, personal and client — shown honestly, in progress.",
  },
  {
    group: "experiment",
    label: "Experiments",
    title: "Ideas we're poking at",
    blurb: "Prototypes and technical explorations that might graduate into builds.",
  },
];

export default function Labs() {
  const [active, setActive] = useState<LabEntry | null>(null);

  return (
    <>
      {GROUPS.map((section) => {
        const entries = LAB_ENTRIES.filter((e) => e.group === section.group);
        if (entries.length === 0) return null;
        const compact = section.group === "experiment";

        return (
          <section
            key={section.group}
            aria-label={section.label}
            className="relative border-b border-line py-20 sm:py-32 last:border-b-0"
          >
            <div className="container-x">
              <div className="mb-14 flex flex-wrap items-end justify-between gap-6 sm:mb-16">
                <SectionHeading
                  label={section.label}
                  title={section.title}
                  className="max-w-2xl"
                />
                <p className="max-w-xs text-sm leading-relaxed text-muted">
                  {section.blurb}
                </p>
              </div>

              {compact ? (
                <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                  {entries.map((entry, i) => (
                    <LabRow
                      key={entry.id}
                      entry={entry}
                      index={i}
                      onOpen={() => setActive(entry)}
                    />
                  ))}
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                  {entries.map((entry, i) => (
                    <LabCard
                      key={entry.id}
                      entry={entry}
                      index={i}
                      onOpen={() => setActive(entry)}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}

      <LabModal entry={active} onClose={() => setActive(null)} />
    </>
  );
}

/** Resolves how an entry behaves: open the on-site modal, or link straight out. */
function entryMode(entry: LabEntry): "modal" | "external" | "none" {
  if (entry.detail) return "modal";
  if (entry.href && entry.href !== "#") return "external";
  if (entry.href) return "external"; // placeholder href still signals "live"
  return "none";
}

function LabCard({
  entry,
  index,
  onOpen,
}: {
  entry: LabEntry;
  index: number;
  onOpen: () => void;
}) {
  const mode = entryMode(entry);
  const external = mode === "external";

  const inner = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <ProjectVisual
            hue={entry.hue}
            accent={entry.accent}
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          />
        </div>
        <div className="absolute top-4 left-4">
          <StatusPill status={entry.status} />
        </div>
        <span className="absolute top-4 right-4 rounded-full border border-line bg-base/50 px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-muted uppercase backdrop-blur">
          {entry.type}
        </span>
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <p className="font-mono text-[11px] tracking-[0.2em] text-mint uppercase">
          {entry.kind}
        </p>
        <h3 className="mt-3 flex items-center gap-2 font-display text-2xl font-medium tracking-tight">
          {entry.title}
          {external ? (
            <ArrowUpRight className="h-4 w-4 text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-mint" />
          ) : (
            mode === "modal" && (
              <ArrowRight className="h-4 w-4 text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-mint" />
            )
          )}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{entry.blurb}</p>
        {entry.updated && (
          <p className="mt-5 font-mono text-[11px] text-faint">
            Updated {entry.updated}
          </p>
        )}
      </div>
    </>
  );

  const className =
    "group flex flex-col rounded-2xl border border-line bg-elevated p-5 text-left transition-colors duration-500 hover:border-iris/40";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {external ? (
        <a
          href={entry.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {inner}
        </a>
      ) : mode === "modal" ? (
        <button type="button" onClick={onOpen} className={className}>
          {inner}
        </button>
      ) : (
        <div className={className}>{inner}</div>
      )}
    </motion.div>
  );
}

function LabRow({
  entry,
  index,
  onOpen,
}: {
  entry: LabEntry;
  index: number;
  onOpen: () => void;
}) {
  const mode = entryMode(entry);
  const interactive = mode !== "none";

  const inner = (
    <>
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-display text-xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-1">
          {entry.title}
        </h3>
        <StatusPill status={entry.status} />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{entry.blurb}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-wide text-faint uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  const className =
    "group block bg-base p-8 text-left transition-colors duration-500 hover:bg-elevated sm:p-10";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6%" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      {mode === "external" ? (
        <a href={entry.href} target="_blank" rel="noopener noreferrer" className={className}>
          {inner}
        </a>
      ) : interactive ? (
        <button type="button" onClick={onOpen} className={`${className} w-full`}>
          {inner}
        </button>
      ) : (
        <div className={className}>{inner}</div>
      )}
    </motion.div>
  );
}
