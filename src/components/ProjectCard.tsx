import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

const cardBase = cn(
  "group block overflow-hidden rounded-[24px] border border-line bg-surface",
  "transition-[box-shadow,transform] duration-300 ease-out",
);
const interactive = cn(
  "hover:-translate-y-[3px] hover:shadow-[0_16px_48px_-12px_rgba(46,48,55,0.22)]",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
);

/**
 * Project card shell.
 * - variant "wide": text left, visual right (desktop flex-row).
 * - variant "stack": title on top, visual below.
 * Clickable when href is set (case pages).
 */
export function ProjectCard({
  title,
  subtitle,
  variant,
  visual,
  href,
}: {
  title: string;
  subtitle: string;
  variant: "wide" | "stack";
  visual: ReactNode;
  href?: string | null;
}) {
  const body =
    variant === "wide" ? (
      <div className="flex h-full flex-col gap-6 p-8 lg:flex-row lg:gap-8 lg:p-10">
        <div className="flex shrink-0 flex-col justify-between lg:w-[320px]">
          <h3 className="text-ink text-[22px] leading-[1.2] font-medium tracking-[-0.02em] lg:text-[28px]">
            {title}
          </h3>
          <p className="text-muted mt-3 text-[16px] leading-[1.4] lg:mt-0">{subtitle}</p>
        </div>
        <div className="min-h-[220px] min-w-0 flex-1">{visual}</div>
      </div>
    ) : (
      <div className="flex h-full flex-col gap-5 p-8">
        <div>
          <h3 className="text-ink text-[22px] leading-[1.2] font-medium tracking-[-0.02em] lg:text-[28px]">
            {title}
          </h3>
          <p className="text-muted mt-2 text-[16px] leading-[1.4]">{subtitle}</p>
        </div>
        <div className="min-h-[240px] min-w-0 flex-1">{visual}</div>
      </div>
    );

  if (href) {
    return (
      <Link
        href={href}
        aria-label={`Открыть кейс: ${title}`}
        className={cn(cardBase, interactive, "lg:h-[537px]")}
      >
        {body}
      </Link>
    );
  }
  return <article className={cn(cardBase, "lg:h-[537px]")}>{body}</article>;
}

/** Single full-bleed screenshot. */
export function Shot({
  src,
  alt,
  fit = "cover",
  position = "top",
}: {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
  position?: "top" | "center";
}) {
  return (
    <div className="border-line relative h-full w-full overflow-hidden rounded-[16px] border bg-white">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 760px"
        className={cn(
          fit === "cover" ? "object-cover" : "object-contain",
          position === "top" ? "object-top" : "object-center",
        )}
      />
    </div>
  );
}

/**
 * Telderi collage: tall deal screen left + two stacked screens right.
 *   telderi1 = full страница сделки (tall, portrait)
 *   telderi2 = чат поддержки (landscape-ish)
 *   telderi3 = финансы профиля (landscape-ish)
 */
export function TelderiCollage({ images }: { images: string[] }) {
  const [a, b, c] = images;
  return (
    <div className="grid h-full min-h-[260px] grid-cols-[1fr_1.1fr] grid-rows-2 gap-3">
      {/* left: full-height portrait screen */}
      <div className="border-line relative row-span-2 overflow-hidden rounded-[14px] border bg-white">
        <Image
          src={a}
          alt="Telderi — страница лота"
          fill
          sizes="360px"
          className="object-cover object-top"
        />
      </div>
      {/* top-right: чат поддержки */}
      <div className="border-line relative overflow-hidden rounded-[14px] border bg-white">
        <Image
          src={b}
          alt="Telderi — чат поддержки"
          fill
          sizes="400px"
          className="object-cover object-top"
        />
      </div>
      {/* bottom-right: профиль / финансы */}
      <div className="border-line relative overflow-hidden rounded-[14px] border bg-white">
        <Image
          src={c}
          alt="Telderi — профиль финансы"
          fill
          sizes="400px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

/**
 * Phone collage: 3 mobile screenshots side by side.
 * Centre phone slightly taller (lifted) to match the Figma layout.
 */
export function PhoneCollage({ images, alts }: { images: string[]; alts: string[] }) {
  return (
    <div className="flex h-full items-end justify-center gap-2 transition-transform duration-300 ease-out group-hover:scale-[1.1]">
      {images.map((src, i) => {
        const isMid = i === 1;
        return (
          <div
            key={src}
            className={cn(
              "border-line/60 relative shrink-0 overflow-hidden rounded-[22px] w-[30%]",
              "transition-all duration-300 ease-out",
              isMid ? "z-20 h-full" : "z-10 h-[88%]",
              // left: rotates left, slides behind center
              i === 0 && "group-hover:-rotate-[18deg] group-hover:translate-x-[28%] group-hover:scale-[0.93]",
              // right: rotates right, slides behind center
              i === 2 && "group-hover:rotate-[18deg] group-hover:-translate-x-[28%] group-hover:scale-[0.93]",
            )}
          >
            <Image
              src={src}
              alt={alts[i] ?? `Экран ${i + 1}`}
              fill
              sizes="(max-width: 640px) 33vw, 220px"
              className="object-contain object-center"
            />
          </div>
        );
      })}
    </div>
  );
}

/**
 * Furnish collage: 2 phones rotated and overlapping, matching Figma layout.
 * Left phone rotated -10.5°, right phone rotated +11.3°.
 */
export function FurnishCollage({ images, alts }: { images: string[]; alts: string[] }) {
  const [a, b] = images;
  return (
    <div className="relative h-full w-full">
      <div
        className="absolute"
        style={{ left: "6%", top: "27%", width: "41%", height: "100%", transform: "rotate(-10.5deg)" }}
      >
        <div className="border-line/60 relative h-full w-full overflow-hidden rounded-[22px] border bg-white shadow-sm">
          <Image
            src={a}
            alt={alts[0] ?? "Furnish — экран 1"}
            fill
            sizes="210px"
            className="object-cover object-top"
          />
        </div>
      </div>
      <div
        className="absolute"
        style={{ left: "43%", top: "21%", width: "41%", height: "100%", transform: "rotate(11.3deg)" }}
      >
        <div className="border-line/60 relative h-full w-full overflow-hidden rounded-[22px] border bg-white shadow-sm">
          <Image
            src={b}
            alt={alts[1] ?? "Furnish — экран 2"}
            fill
            sizes="210px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
