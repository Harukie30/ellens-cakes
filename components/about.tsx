import Image from "next/image";

import { ScrollReveal } from "@/components/scroll-reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-[0.95fr_1.05fr] md:items-start md:gap-16">
        <ScrollReveal direction="left">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
            <Image
              src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1600&q=80"
              alt="Decorated cake on a kitchen counter"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-foreground/10 to-transparent" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delayMs={120}>
          <div className="flex flex-col justify-center">
            <p className="text-sm tracking-[0.18em] text-primary uppercase">
              About
            </p>
            <h2 className="mt-3 font-heading text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
              Small-batch cakes with a personal touch
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Ellen Cakes started in a home kitchen with one goal: make cakes
              that feel as special as the people they celebrate. Every order is
              planned with you, baked fresh, and finished by hand.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
