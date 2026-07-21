"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type RevealDirection = "up" | "left" | "right" | "scale";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /**
   * Adds stagger for orchestrated entrance effects.
   * Measured in milliseconds and applied via `transition-delay`.
   */
  delayMs?: number;
  direction?: RevealDirection;
  /**
   * When true, reveal once and never re-run.
   * This matches a typical "editorial entrance" pattern.
   */
  once?: boolean;
};

export function ScrollReveal({
  children,
  className,
  delayMs = 0,
  direction = "up",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    // If we can't observe visibility, show everything.
    const lacksIntersectionObserver = !("IntersectionObserver" in window);

    return prefersReducedMotion || lacksIntersectionObserver;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;

        setIsVisible(true);
        if (once) observer.disconnect();
      },
      {
        // Reveal when ~15% of the element is in view.
        threshold: 0.15,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, isVisible]);

  const motion = (() => {
    switch (direction) {
      case "left":
        return {
          hidden: "opacity-0 -translate-x-6",
          shown: "opacity-100 translate-x-0",
        };
      case "right":
        return {
          hidden: "opacity-0 translate-x-6",
          shown: "opacity-100 translate-x-0",
        };
      case "scale":
        return {
          hidden: "opacity-0 scale-[1.06]",
          shown: "opacity-100 scale-100",
        };
      case "up":
      default:
        return {
          hidden: "opacity-0 translate-y-8",
          shown: "opacity-100 translate-y-0",
        };
    }
  })();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 will-change-[transform]",
        "ease-[cubic-bezier(0.22,1,0.36,1)]",
        isVisible ? motion.shown : motion.hidden,
        className
      )}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}

