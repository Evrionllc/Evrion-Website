import type { LabEntry } from "@/lib/data";
import { cn } from "@/lib/utils";

/** Colour treatment per status tone — a dot + tinted, bordered chip. */
const TONES: Record<LabEntry["status"]["tone"], { dot: string; chip: string }> = {
  live: { dot: "bg-emerald-400", chip: "border-emerald-400/30 text-emerald-300" },
  progress: { dot: "bg-amber-400", chip: "border-amber-400/30 text-amber-300" },
  beta: { dot: "bg-violet-400", chip: "border-violet-400/30 text-violet-300" },
  internal: { dot: "bg-sky-400", chip: "border-sky-400/30 text-sky-300" },
  idea: { dot: "bg-muted", chip: "border-line text-muted" },
};

export default function StatusPill({
  status,
  className,
}: {
  status: LabEntry["status"];
  className?: string;
}) {
  const tone = TONES[status.tone];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border bg-base/50 px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase backdrop-blur",
        tone.chip,
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          tone.dot,
          status.tone === "live" && "animate-pulse"
        )}
      />
      {status.label}
    </span>
  );
}
