export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-16">
        <div>
          <p className="text-sm tracking-[0.18em] text-primary uppercase">
            About
          </p>
          <h2 className="mt-3 font-heading text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            Small-batch cakes with a personal touch
          </h2>
        </div>
        <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
          Ellen Cakes started in a home kitchen with one goal: make cakes that
          feel as special as the people they celebrate. Every order is planned
          with you, baked fresh, and finished by hand.
        </p>
      </div>
    </section>
  );
}
