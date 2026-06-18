"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/** The guided "tour" through the site, keyed by current path. */
const NEXT: Record<string, { href: string; label: string }> = {
  "/": { href: "/work", label: "Work" },
  "/work": { href: "/studio", label: "Studio" },
  "/studio": { href: "/services", label: "Services" },
  "/services": { href: "/contact", label: "Contact" },
};

// Reveal the button once the viewport bottom is within this many px of the
// document bottom — i.e. as the footer / closing CTA comes into view.
const REVEAL_OFFSET = 700;

/**
 * Floating "up next" button that pops in at the bottom-right as you approach
 * the end of a page and forwards visitors to the next stop in the tour.
 * Renders nothing on pages without a next step (e.g. Contact, Labs).
 */
export default function NextPageButton() {
  const pathname = usePathname();
  const next = NEXT[pathname];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!next) {
      setVisible(false);
      return;
    }

    let frame = 0;
    const evaluate = () => {
      frame = 0;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const remaining = scrollable - window.scrollY;
      // only on pages tall enough to scroll, and only near the bottom
      setVisible(scrollable > 240 && remaining < REVEAL_OFFSET);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(evaluate);
    };

    evaluate();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [next, pathname]);

  return (
    <AnimatePresence>
      {next && visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          // Chat sits bottom-right on mobile, so keep the tour button on the
          // opposite corner there; restore bottom-right from sm up (desktop
          // chat is bottom-left, so the two never collide on larger screens).
          className="fixed bottom-4 left-4 z-50 sm:right-6 sm:bottom-6 sm:left-auto"
        >
          <Link
            href={next.href}
            aria-label={`Next page: ${next.label}`}
            className="group flex items-center gap-4 rounded-full bg-iris py-2 pr-2 pl-6 shadow-[0_12px_45px_-8px_rgba(206,137,70,0.7)] ring-1 ring-accent-soft/50 transition-colors duration-300 hover:bg-accent-soft"
          >
            <span className="text-right">
              <span className="block font-mono text-[10px] tracking-[0.25em] text-base/60 uppercase">
                Up next
              </span>
              <span className="block font-display text-base leading-tight font-medium text-base">
                {next.label}
              </span>
            </span>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-base text-foreground transition-colors duration-300">
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
