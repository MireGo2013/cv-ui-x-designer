import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Circular avatar — Figma "Ava" (200px desktop, 80px mobile). [confirmed sizes]
 * Falls back to an initials disc when the photo is unavailable (the real image
 * cannot be exported from Figma in this environment).
 */
export function Avatar({
  src,
  alt,
  initials,
  className,
}: {
  src?: string;
  alt: string;
  initials: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "[container-type:size] relative aspect-square overflow-hidden rounded-full",
        "ring-line ring-1",
        className,
      )}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes="200px" className="object-cover" priority />
      ) : (
        <div
          aria-label={alt}
          role="img"
          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#cfd6ff] to-[#a9b6ff] font-medium text-white"
        >
          <span className="text-[28cqmin] leading-none">{initials}</span>
        </div>
      )}
    </div>
  );
}
