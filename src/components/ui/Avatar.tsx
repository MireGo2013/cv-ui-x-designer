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
        "[container-type:size] relative aspect-square rounded-full",
        "bg-gradient-to-br from-[#b8c6ff] to-[#7893ff]",
        className,
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-full">
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
    </div>
  );
}
