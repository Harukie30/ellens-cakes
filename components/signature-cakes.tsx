"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { CakeGalleryModal } from "@/components/cake-gallery-modal";
import { ScrollReveal } from "@/components/scroll-reveal";
import { signatureCakes, type SignatureCake } from "@/lib/site";
import { cn } from "@/lib/utils";

const ROTATE_MS = 2500;

function CakeCardImage({
  cake,
  number,
  imageFirst,
  staggerMs,
  onOpen,
}: {
  cake: SignatureCake;
  number: string;
  imageFirst: boolean;
  staggerMs: number;
  onOpen: () => void;
}) {
  const images = cake.gallery;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length < 2) return;

    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (prefersReducedMotion) return;

    let intervalId = 0;
    const startId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setActiveIndex((current) => (current + 1) % images.length);
      }, ROTATE_MS);
    }, staggerMs);

    return () => {
      window.clearTimeout(startId);
      window.clearInterval(intervalId);
    };
  }, [paused, images.length, staggerMs]);

  return (
    <div
      className="relative px-3 pb-5 pt-2 sm:px-5 sm:pb-7 sm:pt-3"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[2rem] opacity-80 blur-2xl",
          "bg-[radial-gradient(ellipse_at_center,oklch(0.45_0.06_18/0.45),transparent_68%)]"
        )}
        aria-hidden
      />

      <div
        className={cn(
          "pointer-events-none absolute top-5 right-2 bottom-2 left-5 rounded-[1.35rem] bg-[oklch(0.38_0.04_25)] sm:top-6 sm:right-3 sm:bottom-3 sm:left-7",
          !imageFirst && "right-5 left-2 sm:right-7 sm:left-3"
        )}
        aria-hidden
      />

      <button
        type="button"
        onClick={onOpen}
        className="group relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-[1.25rem] ring-1 ring-white/15 outline-none transition focus-visible:ring-2 focus-visible:ring-white/40 sm:aspect-[5/6]"
        aria-label={`Open gallery for ${cake.name}`}
      >
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={index === activeIndex ? cake.name : ""}
            fill
            className={cn(
              "object-cover transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]",
              index === activeIndex
                ? "scale-100 opacity-100"
                : "scale-[1.04] opacity-0",
              "group-hover:scale-[1.06]"
            )}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
        ))}

        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,oklch(0.98_0.02_80/0.14),transparent_55%)]"
          aria-hidden
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent opacity-85 transition-opacity duration-700 group-hover:opacity-95"
          aria-hidden
        />

        <div
          className="pointer-events-none absolute inset-3 rounded-[0.9rem] ring-1 ring-white/25 sm:inset-4"
          aria-hidden
        />

        <p className="absolute bottom-5 left-5 font-heading text-6xl leading-none text-white/30 sm:bottom-6 sm:left-6 sm:text-7xl">
          {number}
        </p>

        {images.length > 1 ? (
          <div className="absolute top-5 left-5 flex gap-1.5 sm:top-6 sm:left-6">
            {images.map((src, index) => (
              <span
                key={src}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  index === activeIndex ? "w-5 bg-white/85" : "w-1.5 bg-white/35"
                )}
                aria-hidden
              />
            ))}
          </div>
        ) : null}

        <span className="absolute right-5 bottom-5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs tracking-[0.14em] text-foreground uppercase opacity-90 shadow-sm backdrop-blur-sm transition group-hover:opacity-100 sm:right-6 sm:bottom-6">
          View gallery
        </span>
      </button>
    </div>
  );
}

export function SignatureCakes() {
  const [activeCake, setActiveCake] = useState<SignatureCake | null>(null);

  return (
    <section
      id="cakes"
      className="relative scroll-mt-24 overflow-hidden bg-[oklch(0.28_0.035_30)] py-24 text-white sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_15%_0%,oklch(0.42_0.08_18/0.4),transparent_60%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_90%_80%,oklch(0.36_0.05_20/0.35),transparent_65%)]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <ScrollReveal direction="up">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.2em] text-[oklch(0.82_0.05_25)] uppercase">
              Signature cakes
            </p>
            <h2 className="mt-4 font-heading text-4xl leading-[1.05] tracking-tight text-white sm:text-6xl">
              Cakes that stop
              <span className="block text-[oklch(0.86_0.06_25)]">
                the whole room
              </span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
              Four favorites with serious presence — tap a cake to open its
              gallery, or bring your own idea and we&apos;ll make it yours.
            </p>
          </div>
        </ScrollReveal>

        <ul className="mt-16 space-y-20 sm:mt-20 sm:space-y-28">
          {signatureCakes.map((cake, index) => {
            const imageFirst = index % 2 === 0;
            const number = String(index + 1).padStart(2, "0");

            return (
              <li key={cake.name}>
                <article
                  className={cn(
                    "grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16",
                    !imageFirst && "md:[&>*:first-child]:order-2"
                  )}
                >
                  <ScrollReveal
                    direction={imageFirst ? "left" : "right"}
                    className="relative"
                  >
                    <CakeCardImage
                      cake={cake}
                      number={number}
                      imageFirst={imageFirst}
                      staggerMs={index * 400}
                      onOpen={() => setActiveCake(cake)}
                    />
                  </ScrollReveal>

                  <ScrollReveal
                    direction={imageFirst ? "right" : "left"}
                    delayMs={120}
                  >
                    <div className={cn(!imageFirst && "md:text-right")}>
                      <p
                        className={cn(
                          "text-xs tracking-[0.22em] text-[oklch(0.82_0.05_25)] uppercase",
                          !imageFirst && "md:ml-auto"
                        )}
                      >
                        Flavor {number}
                      </p>
                      <h3 className="mt-4 font-heading text-4xl leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
                        {cake.name}
                      </h3>
                      <p
                        className={cn(
                          "mt-4 max-w-sm font-heading text-xl italic leading-snug text-[oklch(0.86_0.05_25)] sm:text-2xl",
                          !imageFirst && "md:ml-auto"
                        )}
                      >
                        {cake.tagline}
                      </p>
                      <p
                        className={cn(
                          "mt-5 max-w-sm text-base leading-relaxed text-white/65",
                          !imageFirst && "md:ml-auto"
                        )}
                      >
                        {cake.description}
                      </p>
                      <p
                        className={cn(
                          "mt-3 max-w-sm text-sm text-white/55",
                          !imageFirst && "md:ml-auto"
                        )}
                      >
                        {cake.note}
                      </p>
                      <div
                        className={cn(
                          "mt-8 flex flex-wrap items-center gap-x-5 gap-y-3",
                          !imageFirst && "md:justify-end"
                        )}
                      >
                        <button
                          type="button"
                          onClick={() => setActiveCake(cake)}
                          className="inline-flex items-center gap-2 text-sm tracking-wide text-[oklch(0.88_0.05_25)] transition-all duration-300 hover:gap-3 hover:text-white"
                        >
                          Open gallery
                          <span aria-hidden>→</span>
                        </button>
                        <a
                          href="#order"
                          className="inline-flex items-center gap-2 text-sm tracking-wide text-white/55 transition-colors hover:text-white/85"
                        >
                          Ask about this flavor
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>
                </article>
              </li>
            );
          })}
        </ul>
      </div>

      <CakeGalleryModal
        cake={activeCake}
        open={activeCake !== null}
        onOpenChange={(open) => {
          if (!open) setActiveCake(null);
        }}
      />
    </section>
  );
}
