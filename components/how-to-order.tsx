"use client";

import { useEffect, useState } from "react";
import {
  CakeIcon,
  CheckmarkCircle02Icon,
  Message01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: "01",
    title: "Share your vision",
    body: "Tell us the date, guest count, flavors, and any design ideas you love.",
    detail:
      "Send photos, color palettes, or themes — the more we know, the closer we get on the first draft.",
    icon: Message01Icon,
  },
  {
    step: "02",
    title: "Confirm the details",
    body: "We’ll send a quote and timeline so you know exactly what to expect.",
    detail:
      "Once everything looks right, we lock in your date and start preparing your cake.",
    icon: CheckmarkCircle02Icon,
  },
  {
    step: "03",
    title: "Pickup or delivery",
    body: "Your cake is baked fresh and ready for the celebration.",
    detail:
      "We’ll coordinate the handoff so your cake arrives looking as beautiful as it tastes.",
    icon: CakeIcon,
  },
] as const;

export function HowToOrder() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused]);

  const current = steps[active];

  return (
    <section
      id="how"
      className="relative overflow-hidden py-24 sm:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,oklch(0.94_0.03_18/0.7),transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm tracking-[0.2em] text-primary/80 uppercase">
            How to order
          </p>
          <h2 className="mt-4 font-heading text-4xl leading-[1.15] tracking-tight text-foreground sm:text-5xl">
            Simple from first message to first slice
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Three gentle steps — tap any one to peek ahead.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            className="absolute top-8 right-[16%] left-[16%] hidden h-[2px] rounded-full bg-primary/10 md:block"
            aria-hidden
          />
          <div
            className="absolute top-8 left-[16%] hidden h-[2px] origin-left rounded-full bg-primary/35 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:block"
            style={{
              width: `${(active / (steps.length - 1)) * 68}%`,
            }}
            aria-hidden
          />

          <ol className="grid gap-8 md:grid-cols-3 md:gap-10">
            {steps.map((item, index) => {
              const isActive = index === active;
              const isComplete = index < active;

              return (
                <li key={item.step} className="flex justify-center md:block">
                  <button
                    type="button"
                    onClick={() => {
                      setActive(index);
                      setPaused(true);
                    }}
                    onFocus={() => setPaused(true)}
                    aria-pressed={isActive}
                    className={cn(
                      "group relative w-full max-w-sm rounded-2xl p-6 text-left transition-all duration-500 ease-out outline-none focus-visible:ring-2 focus-visible:ring-primary/25 sm:p-7",
                      isActive
                        ? "bg-white/55 shadow-[0_20px_50px_-28px_oklch(0.42_0.11_12/0.35)]"
                        : "bg-transparent hover:bg-white/35"
                    )}
                  >
                    <span
                      className={cn(
                        "relative z-10 mb-6 flex size-16 items-center justify-center rounded-full transition-all duration-500 ease-out",
                        isActive &&
                          "bg-primary/12 text-primary ring-1 ring-primary/20",
                        isComplete &&
                          !isActive &&
                          "bg-primary/8 text-primary/80",
                        !isActive &&
                          !isComplete &&
                          "bg-secondary/80 text-muted-foreground group-hover:bg-primary/8 group-hover:text-primary/70"
                      )}
                    >
                      <HugeiconsIcon
                        icon={item.icon}
                        strokeWidth={1.5}
                        className="size-6"
                      />
                    </span>

                    <p
                      className={cn(
                        "text-xs tracking-[0.18em] uppercase transition-colors duration-500",
                        isActive ? "text-primary/80" : "text-muted-foreground/80"
                      )}
                    >
                      Step {item.step}
                    </p>
                    <h3
                      className={cn(
                        "mt-3 font-heading text-2xl tracking-tight transition-colors duration-500",
                        isActive ? "text-foreground" : "text-foreground/65"
                      )}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 text-sm leading-relaxed transition-all duration-500 sm:text-[0.95rem]",
                        isActive
                          ? "text-muted-foreground opacity-100"
                          : "line-clamp-2 text-muted-foreground/70"
                      )}
                    >
                      {item.body}
                    </p>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <div
          key={current.step}
          className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-6 text-center animate-fade-up"
        >
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            <span className="font-heading text-foreground">{current.title}.</span>{" "}
            {current.detail}
          </p>
          <a
            href="#order"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "h-11 px-6 text-sm text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
            )}
          >
            Start your order
          </a>
        </div>

        <div className="mx-auto mt-10 flex max-w-xs justify-center gap-2.5 md:hidden">
          {steps.map((item, index) => (
            <button
              key={item.step}
              type="button"
              onClick={() => {
                setActive(index);
                setPaused(true);
              }}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                index === active
                  ? "w-8 bg-primary/60"
                  : "w-1.5 bg-primary/20 hover:bg-primary/35"
              )}
              aria-label={`Go to step ${item.step}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
