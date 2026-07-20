"use client";

import { useEffect, useState } from "react";
import { Menu01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { BrandMark } from "@/components/brand-mark";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;
      const pastHero = currentY > 48;

      setScrolled(pastHero);

      // Always show near the top, or while the mobile menu is open
      if (currentY < 80 || menuOpen) {
        setVisible(true);
      } else if (Math.abs(delta) > 6) {
        // Scroll down → hide, scroll up → show (with a soft threshold)
        setVisible(delta < 0);
      }

      lastY = currentY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  const isShown = visible || menuOpen;

  return (
    <header
      className={cn(
        "site-header fixed inset-x-0 top-0 z-40",
        isShown ? "is-visible" : "is-hidden",
        scrolled
          ? "bg-background/80 shadow-[0_10px_40px_-24px_oklch(0.28_0.035_35/0.35)] backdrop-blur-md"
          : "bg-transparent shadow-none backdrop-blur-none"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <BrandMark
          className={cn(
            "text-xl transition-colors duration-500 sm:text-2xl",
            scrolled ? "text-foreground" : "text-white drop-shadow-sm"
          )}
          iconClassName={cn(
            "transition-colors duration-500",
            scrolled ? "text-primary" : "text-white"
          )}
        />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors duration-500",
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-white/85 hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#order"
            className={cn(
              buttonVariants({ variant: scrolled ? "default" : "secondary" }),
              "h-10 px-4 text-sm transition-all duration-500"
            )}
          >
            Order a cake
          </a>
        </nav>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger
            render={
              <Button
                variant={scrolled ? "outline" : "secondary"}
                size="icon"
                className="md:hidden transition-all duration-500"
                aria-label="Open menu"
              />
            }
          >
            <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} />
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(100%,20rem)]">
            <SheetHeader>
              <SheetTitle className="text-lg">
                <BrandMark as="span" className="text-lg text-foreground" />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-6">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  render={
                    <a
                      href={link.href}
                      className="rounded-md px-3 py-3 text-base text-foreground transition-colors hover:bg-muted"
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
              <SheetClose
                render={
                  <a
                    href="#order"
                    className={cn(
                      buttonVariants(),
                      "mt-4 h-11 justify-center px-4 text-sm"
                    )}
                  />
                }
              >
                Order a cake
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
