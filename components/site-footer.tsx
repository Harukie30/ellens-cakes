import {
  Facebook01Icon,
  InstagramIcon,
  Location01Icon,
  Mail01Icon,
  Clock01Icon,
  TiktokIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { BrandMark } from "@/components/brand-mark";
import { buttonVariants } from "@/components/ui/button";
import { navLinks, site, socialLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

const socialIcons = {
  instagram: InstagramIcon,
  facebook: Facebook01Icon,
  tiktok: TiktokIcon,
  whatsapp: WhatsappIcon,
} as const;

export function SiteFooter() {
  return (
    <footer className="relative mt-8 overflow-hidden bg-secondary/55 pt-4">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,oklch(0.88_0.04_18/0.45),transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-14 pb-10 sm:px-8 sm:pt-16">
        <div className="flex flex-col gap-8 rounded-3xl border border-border/50 bg-secondary/80 px-6 py-8 shadow-[0_20px_50px_-32px_oklch(0.28_0.035_35/0.25)] sm:px-10 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <p className="font-heading text-2xl tracking-tight text-foreground sm:text-3xl">
              Ready for something sweet?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Tell us about your celebration and we&apos;ll help shape the cake.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#order"
              className={cn(
                buttonVariants(),
                "h-11 px-5 text-sm transition-transform hover:-translate-y-0.5"
              )}
            >
              Order a cake
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "h-11 px-5 text-sm transition-transform hover:-translate-y-0.5"
              )}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <BrandMark
              className="text-2xl text-foreground"
              iconClassName="text-primary"
            />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.tagline} Handcrafted cakes for birthdays, weddings, and
              everyday celebrations.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs tracking-[0.18em] text-primary/80 uppercase">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.18em] text-primary/80 uppercase">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <HugeiconsIcon
                    icon={Mail01Icon}
                    strokeWidth={1.6}
                    className="size-4 shrink-0 text-primary/70"
                  />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <HugeiconsIcon
                    icon={WhatsappIcon}
                    strokeWidth={1.6}
                    className="size-4 shrink-0 text-primary/70"
                  />
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-2 pt-1">
                <HugeiconsIcon
                  icon={Location01Icon}
                  strokeWidth={1.6}
                  className="mt-0.5 size-4 shrink-0 text-primary/70"
                />
                <span>{site.location}</span>
              </li>
              <li className="flex gap-2">
                <HugeiconsIcon
                  icon={Clock01Icon}
                  strokeWidth={1.6}
                  className="mt-0.5 size-4 shrink-0 text-primary/70"
                />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.18em] text-primary/80 uppercase">
              Follow along
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Peek at recent bakes and behind-the-scenes moments.
            </p>
            <ul className="mt-5 space-y-2">
              {socialLinks.map((item) => {
                const Icon = socialIcons[item.icon];
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-2xl border border-border/40 bg-secondary/70 px-3.5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/90"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary/80 transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                        <HugeiconsIcon
                          icon={Icon}
                          strokeWidth={1.6}
                          className="size-4"
                        />
                      </span>
                      <span className="min-w-0 flex-1 text-left">
                        <span className="block text-sm text-foreground">
                          {item.label}
                        </span>
                        <span className="block truncate text-xs text-muted-foreground">
                          {item.handle}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="sm:text-right">
            Custom cakes · Freshly baked · Made with care
          </p>
        </div>
      </div>
    </footer>
  );
}
