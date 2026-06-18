import Image from "next/image";
import { cn } from "@/lib/utils";

type ProjectVisualProps = {
  /** tailwind gradient classes for the placeholder field */
  hue: string;
  /** accent colour for the ring + glow */
  accent: string;
  /** large ghosted number, shown only on the hero placeholder */
  index?: string;
  /** real image path (in /public); when set, replaces the placeholder */
  src?: string;
  alt?: string;
  /** sizes hint passed to next/image when a real src is used */
  sizes?: string;
  /** shifts the placeholder composition so repeated frames don't look identical */
  variant?: number;
  className?: string;
};

/**
 * The project artwork — the same generative gradient/ring/grid field used on
 * the Work cards, packaged so it can stand in as a placeholder for the case
 * study hero and gallery. Pass a real `src` once imagery exists and it renders
 * the photo instead, no other changes needed.
 */
export default function ProjectVisual({
  hue,
  accent,
  index,
  src,
  alt = "",
  sizes,
  variant = 0,
  className,
}: ProjectVisualProps) {
  if (src) {
    return (
      <div className={cn("relative h-full w-full overflow-hidden", className)}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  // Nudge the ring around per-variant so a row of placeholders feels composed.
  const ringPos = [
    { top: "50%", left: "50%", size: "55%" },
    { top: "38%", left: "62%", size: "44%" },
    { top: "60%", left: "36%", size: "48%" },
    { top: "45%", left: "55%", size: "38%" },
  ][variant % 4];

  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-elevated", className)}>
      <div className={cn("absolute inset-0 bg-gradient-to-br", hue)} />
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-60"
        style={{
          top: ringPos.top,
          left: ringPos.left,
          height: ringPos.size,
          width: ringPos.size,
          borderColor: accent,
          borderWidth: 1.5,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{ background: accent, opacity: 0.35 }}
      />
      {index && (
        <span
          aria-hidden="true"
          className="absolute right-[6%] bottom-[6%] font-display text-7xl font-bold tracking-tighter text-white/10 sm:text-8xl"
        >
          {index}
        </span>
      )}
    </div>
  );
}
