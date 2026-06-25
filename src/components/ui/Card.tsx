import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** White surface card — Figma "Card" (bg #fff, radius 24). [confirmed] */
export function Card({
  children,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}) {
  return (
    <As className={cn("border-line bg-surface rounded-[24px] border", className)}>{children}</As>
  );
}

/** Section heading — 28px / Medium. [verify size] */
export function SectionHeading({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className={cn(
        "text-ink text-[22px] leading-[1.2] font-medium tracking-[-0.02em] md:text-[28px]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

/**
 * Placeholder for a raster asset that could not be exported from Figma
 * (sandbox cannot reach figma.com). Drop the real file into /public/images/
 * and swap for next/image. Keeps exact aspect ratio so layout is faithful.
 */
export function ImagePlaceholder({
  label,
  className,
  ratio,
}: {
  label: string;
  className?: string;
  ratio?: string; // e.g. "16/10"
}) {
  return (
    <div
      role="img"
      aria-label={`${label} — превью (заглушка)`}
      style={ratio ? { aspectRatio: ratio } : undefined}
      className={cn(
        "flex items-center justify-center overflow-hidden rounded-[16px]",
        "bg-gradient-to-br from-[#eef0fb] to-[#e3e6f7] text-[#9aa0c2]",
        "text-[14px] font-medium select-none",
        className,
      )}
    >
      {label}
    </div>
  );
}
