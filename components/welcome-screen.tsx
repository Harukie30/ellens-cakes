"use client";

import { useEffect, useState } from "react";
import { FlowerIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function WelcomeScreen() {
  const [phase, setPhase] = useState<"visible" | "leaving" | "done">(() => {
    if (typeof window === "undefined") return "visible";
    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    return prefersReducedMotion ? "done" : "visible";
  });

  useEffect(() => {
    if (phase === "done") return;

    document.documentElement.classList.add("welcome-lock");

    const leaveTimer = window.setTimeout(() => {
      setPhase("leaving");
    }, 2400);

    const doneTimer = window.setTimeout(() => {
      document.documentElement.classList.remove("welcome-lock");
      setPhase("done");
    }, 3200);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
      document.documentElement.classList.remove("welcome-lock");
    };
    // Intentionally run once on mount for the welcome timing sequence.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center overflow-hidden",
        "bg-[oklch(0.27_0.035_30)] text-white",
        "transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        phase === "leaving" ? "pointer-events-none opacity-0" : "opacity-100"
      )}
      role="status"
      aria-live="polite"
      aria-label="Welcome to Ellen Cakes"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_40%,oklch(0.42_0.08_18/0.45),transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_90%,oklch(0.55_0.08_15/0.2),transparent_60%)]"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <HugeiconsIcon
          icon={FlowerIcon}
          strokeWidth={1.5}
          className="size-8 animate-welcome-fade text-white/80 sm:size-9"
          aria-hidden
        />

        <p className="mt-6 font-heading text-4xl tracking-tight animate-welcome-fade animation-delay-150 sm:text-5xl">
          {site.name}
        </p>

        <p className="mt-3 max-w-xs text-sm tracking-[0.18em] text-white/65 uppercase animate-welcome-fade animation-delay-300">
          Welcome
        </p>

        <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70 animate-welcome-fade animation-delay-450 sm:text-base">
          Celebration cakes, baked with care.
        </p>

        <div className="mt-10 flex w-40 flex-col items-center gap-3 animate-welcome-fade animation-delay-450">
          <div
            className="h-[2px] w-full overflow-hidden rounded-full bg-white/15"
            aria-hidden
          >
            <div className="h-full w-full origin-left animate-welcome-bar rounded-full bg-white/75" />
          </div>
          <p className="text-[11px] tracking-[0.2em] text-white/45 uppercase">
            Loading
          </p>
        </div>
      </div>
    </div>
  );
}
