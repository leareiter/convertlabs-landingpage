"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam = ({
  className,
  size = 200,
  duration = 2,
  borderWidth = 1,
  colorFrom = "#adff02",
  colorTo = "transparent",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div
      style={{
        "--size": size,
        "--duration": duration,
        "--border-width": borderWidth,
        "--color-from": colorFrom,
        "--color-to": colorTo,
        "--delay": delay,
      } as React.CSSProperties}
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        "before:absolute before:inset-0 before:rounded-[inherit]",
        "before:bg-linear-to-r before:from-(--color-from) before:to-(--color-to)",
        "before:opacity-0 before:animate-border-beam",
        "before:[animation-delay:var(--delay)]",
        className
      )}
    />
  );
};
