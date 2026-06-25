"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import { headerLinks } from "@/data/content";

/** Coloured icon badge — accent tint bg, turns white on parent hover. */
function IconBadge({ name }: { name: IconName }) {
  const isCircle = name === "telegram" || name === "behance";
  return (
    <span
      className={cn(
        "inline-flex size-6 shrink-0 items-center justify-center transition-colors",
        isCircle ? "rounded-full" : "rounded-[6px]",
        "bg-accent/15 text-accent",
        "group-hover/ni:bg-white/20 group-hover/ni:text-white",
      )}
    >
      <Icon name={name} />
    </span>
  );
}

const isHttp = (href: string) => /^https?:/i.test(href);
const attrs = (href: string) =>
  isHttp(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};

/**
 * Header — Figma "Header" (h 82 desktop / 100 mobile). The nav is a row of
 * contact buttons (Телеграм / LinkedIn / CV / Почта / Behance) [confirmed].
 * Mobile (<md): brand + disclosure menu listing the same links.
 */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-line bg-page/85 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="container-content flex h-[64px] items-center justify-between md:h-[82px] md:justify-center">
        <a href="#top" className="text-ink text-[18px] font-medium tracking-[-0.01em] md:hidden">
          Алина Соболь
        </a>

        {/* Desktop: contact buttons */}
        <nav aria-label="Контакты" className="hidden md:block">
          <ul className="flex items-center gap-4">
            {headerLinks.map((item) => (
              <li key={item.label}>
                <Button as="a" href={item.href} aria-label={item.label} {...attrs(item.href)} className="group/ni">
                  <IconBadge name={item.icon} />
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="border-line bg-subtle text-ink hover:border-accent hover:bg-accent inline-flex size-10 items-center justify-center rounded-full border transition-colors hover:text-white md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={cn(
                "absolute left-0 h-0.5 w-5 rounded bg-current transition-transform",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute top-1.5 left-0 h-0.5 w-5 rounded bg-current transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-0.5 w-5 rounded bg-current transition-transform",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        id="mobile-nav"
        aria-label="Контакты"
        className={cn(
          "container-content overflow-hidden md:hidden",
          open ? "max-h-96 pb-4" : "max-h-0",
          "transition-[max-height] duration-300 ease-out",
        )}
      >
        <ul className="flex flex-col gap-2">
          {headerLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                {...attrs(item.href)}
                onClick={() => setOpen(false)}
                className="group/ni border-line bg-subtle text-ink hover:border-accent hover:bg-accent flex items-center gap-2 rounded-[12px] border px-4 py-3 text-[16px] font-medium transition-colors hover:text-white"
              >
                <IconBadge name={item.icon} />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
