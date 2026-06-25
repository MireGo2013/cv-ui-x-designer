import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Pill button — Figma UI-kit "Button" (radius 1000, px 12 / py 6, gap 8).
 * Variant states map to interaction:
 *   Default → base, Hover → :hover, Pressed → :active   [confirmed colors]
 */
const base = cn(
  "inline-flex items-center justify-center gap-2 rounded-full px-3 py-1.5",
  "text-[16px] font-medium leading-[1.4] whitespace-nowrap",
  "border border-line bg-subtle text-ink",
  "transition-colors duration-150 ease-out cursor-pointer",
  "hover:border-accent hover:bg-accent hover:text-white",
  "active:border-accent-pressed active:bg-accent-pressed active:text-white",
);

type CommonProps = { children: ReactNode; className?: string };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button"; href?: never };
type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };

export function Button({ children, className, ...props }: ButtonAsButton | ButtonAsLink) {
  if (props.as === "a") {
    const { as: _as, ...rest } = props;
    return (
      <a className={cn(base, className)} {...rest}>
        {children}
      </a>
    );
  }
  const { as: _as, ...rest } = props as ButtonAsButton;
  return (
    <button className={cn(base, className)} {...rest}>
      {children}
    </button>
  );
}
