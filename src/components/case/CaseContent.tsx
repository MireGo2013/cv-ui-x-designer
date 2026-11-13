import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Text building blocks for case pages — Figma "Теплинг".
 * Body: 16px / 1.3, muted. Labels: 16px medium, ink. Section titles: 24px medium.
 */

export function CaseSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-ink text-[24px] leading-[1.2] font-medium tracking-[-0.02em]">{title}</h2>
      {children}
    </section>
  );
}

export function Paragraphs({ items }: { items: readonly string[] }) {
  return (
    <div className="text-muted flex flex-col gap-2 text-[16px] leading-[1.3]">
      {items.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return <p className="text-ink text-[16px] leading-[1.3] font-medium">{children}</p>;
}

/** Label + bulleted list (goals, results). */
export function BulletGroup({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div className="flex flex-col gap-0.5">
      <Label>{label}</Label>
      <ul className="text-muted list-disc ps-6 text-[16px] leading-[1.3]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Screenshot on a white stage.
 * - "screen": 634×405 framed shot (full width on mobile), cropped from the top.
 * - "form":   narrow portrait shot, 208px mobile / 314px desktop.
 */
export function CaseFigure({
  src,
  alt,
  kind,
  bordered = true,
}: {
  src: string;
  alt: string;
  kind: "screen" | "form";
  bordered?: boolean;
}) {
  const isForm = kind === "form";
  return (
    <figure
      className={cn(
        "flex w-full justify-center",
        isForm ? "py-3.5 md:py-5" : "py-[31px] md:py-[47px]",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          bordered && "ring-3 ring-[#f3f3f9]",
          isForm
            ? "aspect-[314/401] w-[208px] rounded-[20px] md:w-[314px]"
            : "aspect-[634/405] w-full rounded-[16px] md:w-[634px]",
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={isForm ? "(max-width: 768px) 208px, 314px" : "(max-width: 768px) 100vw, 634px"}
          className="object-cover object-top"
        />
      </div>
    </figure>
  );
}
