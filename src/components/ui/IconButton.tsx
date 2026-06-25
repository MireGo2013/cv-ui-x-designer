import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Icon-only control — Figma UI-kit "Icon Button" (32px, Default/Hover/Pressed).
 * Rendered at a 40px tap target for accessibility. Link when `href` is set.
 */
export function IconButton({
  href,
  label,
  children,
  className,
}: {
  href?: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  const cls = cn(
    "inline-flex size-10 items-center justify-center rounded-full border border-line bg-subtle text-ink",
    "transition-colors duration-150 hover:border-accent hover:bg-accent hover:text-white",
    "active:border-accent-pressed active:bg-accent-pressed active:text-white",
    className,
  );
  if (href) {
    return (
      <Link href={href} aria-label={label} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" aria-label={label} className={cls}>
      {children}
    </button>
  );
}

export function ChevronLeft() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
