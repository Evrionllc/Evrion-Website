"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type FluidFrameProps = {
  children: ReactNode;
  className?: string;
  /** which top corner the frame is pinned to while it unfurls */
  origin?: "left" | "right";
};

/**
 * Scroll-scrubbed reveal: the frame wipes open upward from its lower edge
 * while the artwork inside settles from a gentle overscale and a small rise,
 * anchored to the bottom corner nearest its text column. No rotation, modest
 * scale — a calm, editorial reveal rather than a flourish. Scrubbing ties the
 * whole thing to scroll position so it eases in as the card enters view.
 */
export default function FluidFrame({
  children,
  className,
  origin = "left",
}: FluidFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const left = origin === "left";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: frameRef.current,
          start: "top 90%",
          end: "top 55%",
          scrub: 1,
        },
      });

      tl.fromTo(
        frameRef.current,
        { clipPath: "inset(14% 0% 0% 0% round 16px)", opacity: 0 },
        {
          clipPath: "inset(0% 0% 0% 0% round 16px)",
          opacity: 1,
          ease: "power2.out",
          duration: 1,
        },
        0
      ).fromTo(
        scaleRef.current,
        { scale: 1.06, yPercent: 4, transformOrigin: left ? "0% 100%" : "100% 100%" },
        { scale: 1, yPercent: 0, ease: "power2.out", duration: 1 },
        0
      );

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, [origin]);

  return (
    <div ref={frameRef} className={cn("will-change-[clip-path]", className)}>
      <div ref={scaleRef} className="h-full w-full will-change-transform">
        {children}
      </div>
    </div>
  );
}
