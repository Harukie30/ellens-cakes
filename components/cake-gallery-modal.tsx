"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog } from "@base-ui/react/dialog";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button, buttonVariants } from "@/components/ui/button";
import type { SignatureCake } from "@/lib/site";
import { cn } from "@/lib/utils";

type CakeGalleryModalProps = {
  cake: SignatureCake | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function GalleryContent({ cake }: { cake: SignatureCake }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const gallery = cake.gallery;
  const activeImage = gallery[activeIndex] ?? cake.image;

  useEffect(() => {
    if (gallery.length < 2) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((current) => (current + 1) % gallery.length);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex(
          (current) => (current - 1 + gallery.length) % gallery.length
        );
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [gallery.length]);

  function goPrev() {
    if (gallery.length < 2) return;
    setActiveIndex((current) => (current - 1 + gallery.length) % gallery.length);
  }

  function goNext() {
    if (gallery.length < 2) return;
    setActiveIndex((current) => (current + 1) % gallery.length);
  }

  return (
    <>
      <div className="flex items-center justify-between gap-4 border-b border-border/60 px-5 py-4 sm:px-7">
        <div className="min-w-0">
          <Dialog.Title className="truncate font-heading text-xl tracking-tight sm:text-2xl">
            {cake.name}
          </Dialog.Title>
          <Dialog.Description className="mt-0.5 truncate text-sm text-muted-foreground">
            {cake.tagline}
          </Dialog.Description>
        </div>
        <Dialog.Close
          render={
            <Button
              variant="ghost"
              size="icon-lg"
              className="shrink-0 rounded-full"
              aria-label="Close gallery"
            />
          }
        >
          <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
        </Dialog.Close>
      </div>

      <div className="grid min-h-0 flex-1 lg:grid-cols-[1.35fr_0.9fr]">
        <div className="relative flex min-h-[42vh] flex-col bg-[oklch(0.94_0.015_25)] sm:min-h-[50vh]">
          <div className="relative min-h-0 flex-1">
            <Image
              key={activeImage}
              src={activeImage}
              alt={`${cake.name} gallery photo ${activeIndex + 1}`}
              fill
              className="object-cover animate-fade-in"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent"
              aria-hidden
            />
          </div>

          {gallery.length > 1 ? (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute top-1/2 left-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-md backdrop-blur-sm transition hover:bg-background sm:left-4"
                aria-label="Previous photo"
              >
                <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={1.8} />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute top-1/2 right-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-md backdrop-blur-sm transition hover:bg-background sm:right-4"
                aria-label="Next photo"
              >
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={1.8} />
              </button>

              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 px-4">
                {gallery.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "relative size-14 overflow-hidden rounded-lg ring-2 transition sm:size-16",
                      index === activeIndex
                        ? "ring-primary"
                        : "ring-transparent opacity-75 hover:opacity-100"
                    )}
                    aria-label={`Show photo ${index + 1}`}
                    aria-current={index === activeIndex}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                ))}
              </div>
            </>
          ) : null}
        </div>

        <div className="flex flex-col justify-between gap-8 overflow-y-auto border-t border-border/60 p-6 sm:p-8 lg:border-t-0 lg:border-l">
          <div>
            <p className="text-xs tracking-[0.2em] text-primary/80 uppercase">
              Gallery
            </p>
            <h3 className="mt-3 font-heading text-3xl leading-tight tracking-tight sm:text-4xl">
              {cake.name}
            </h3>
            <p className="mt-4 font-heading text-lg italic text-primary/85 sm:text-xl">
              {cake.tagline}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {cake.description}
            </p>
            <p className="mt-3 text-sm text-foreground/75">{cake.note}</p>

            {gallery.length > 1 ? (
              <p className="mt-6 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Photo {activeIndex + 1} of {gallery.length}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Dialog.Close
              render={
                <a
                  href="#order"
                  className={cn(
                    buttonVariants(),
                    "h-11 justify-center px-5 text-sm"
                  )}
                />
              }
            >
              Ask about this flavor
            </Dialog.Close>
            <Dialog.Close
              render={
                <Button variant="secondary" className="h-11 px-5 text-sm" />
              }
            >
              Close gallery
            </Dialog.Close>
          </div>
        </div>
      </div>
    </>
  );
}

export function CakeGalleryModal({
  cake,
  open,
  onOpenChange,
}: CakeGalleryModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop
          className={cn(
            "fixed inset-0 z-[90] bg-[oklch(0.22_0.03_30/0.72)] backdrop-blur-md",
            "transition-opacity duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0"
          )}
        />
        <Dialog.Popup
          className={cn(
            "fixed inset-3 z-[91] mx-auto flex max-h-[calc(100svh-1.5rem)] w-[min(100%,72rem)] flex-col overflow-hidden rounded-[1.5rem] bg-background shadow-[0_40px_100px_-40px_oklch(0.2_0.03_30/0.65)] outline-none sm:inset-6",
            "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "data-ending-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:scale-[0.98] data-starting-style:opacity-0"
          )}
        >
          {cake ? <GalleryContent key={cake.name} cake={cake} /> : null}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
