import { FlowerIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  iconClassName?: string;
  href?: string;
  as?: "a" | "span";
};

export function BrandMark({
  className,
  iconClassName,
  href = "#top",
  as = "a",
}: BrandMarkProps) {
  const content = (
    <>
      <HugeiconsIcon
        icon={FlowerIcon}
        strokeWidth={1.75}
        className={cn("size-5 shrink-0 sm:size-6", iconClassName)}
        aria-hidden
      />
      <span>{site.name}</span>
    </>
  );

  if (as === "span") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 font-heading tracking-tight",
          className
        )}
      >
        {content}
      </span>
    );
  }

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-2 font-heading tracking-tight",
        className
      )}
    >
      {content}
    </a>
  );
}
