"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="order" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm tracking-[0.18em] text-primary uppercase">
            Order
          </p>
          <h2 className="mt-3 font-heading text-4xl leading-tight tracking-tight sm:text-5xl">
            Let’s bake something beautiful
          </h2>
          <p className="mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
            Send a quick note about your celebration. We’ll reply with
            availability and next steps.
          </p>

          <div className="mt-8 space-y-2 text-sm sm:text-base">
            <p>
              <span className="text-muted-foreground">Email: </span>
              <a
                href={`mailto:${site.email}`}
                className="underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </p>
            <p>
              <span className="text-muted-foreground">WhatsApp: </span>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {site.phoneDisplay}
              </a>
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-none bg-card/60 p-1"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="h-11 px-3 text-sm md:text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              className="h-11 px-3 text-sm md:text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">About your cake</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Date, flavors, guest count, design ideas…"
              className="min-h-32 px-3 py-2.5 text-sm md:text-sm"
            />
          </div>
          <Button type="submit" className="h-11 px-5 text-sm">
            Send inquiry
          </Button>
          {submitted ? (
            <p className="text-sm text-primary animate-fade-in" role="status">
              Thanks! We received your details. Reach out by email or WhatsApp
              above and we&apos;ll confirm the next steps.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
