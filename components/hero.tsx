import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=2000&q=80"
        alt="A richly decorated chocolate celebration cake"
        fill
        priority
        className="object-cover animate-soft-scale"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/35 to-foreground/20" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <p className="font-heading animate-fade-up text-5xl leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl">
          {site.name}
        </p>
        <p className="mt-5 max-w-md animate-fade-up animation-delay-150 text-base text-white/90 sm:text-lg">
          {site.tagline} Custom cakes for birthdays, weddings, and the moments
          worth gathering .
        </p>
        <div className="mt-8 flex flex-wrap gap-3 animate-fade-up animation-delay-300">
          <a
            href="#order"
            className={cn(
              buttonVariants(),
              "h-11 px-5 text-sm transition-transform hover:-translate-y-0.5"
            )}
          >
            Order a custom cake
          </a>
          <a
            href="#cakes"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "h-11 px-5 text-sm bg-white/90 transition-transform hover:-translate-y-0.5"
            )}
          >
            See signature cakes
          </a>
        </div>
      </div>
    </section>
  );
}
