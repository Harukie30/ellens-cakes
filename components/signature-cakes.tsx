import Image from "next/image";

import { signatureCakes } from "@/lib/site";
import { ScrollReveal } from "@/components/scroll-reveal";

export function SignatureCakes() {
  return (
    <section id="cakes" className="scroll-mt-24 pb-20 sm:pb-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <p className="text-sm tracking-[0.18em] text-primary uppercase">
            Signature cakes
          </p>
          <h2 className="mt-3 font-heading text-4xl leading-tight tracking-tight sm:text-5xl">
            Flavors worth celebrating
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            A few favorites to start from — or tell us your vision and we&apos;ll
            build something new.
          </p>
        </div>

        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-14">
          {signatureCakes.map((cake, index) => (
            <li key={cake.name} className="group">
              <ScrollReveal
                direction="up"
                delayMs={index * 120}
                className="h-full"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={cake.image}
                    alt={cake.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <h3 className="mt-5 font-heading text-2xl tracking-tight">
                  {cake.name}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {cake.description}
                </p>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
