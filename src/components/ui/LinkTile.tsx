import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

/**
 * Figma UI-kit "Link" tile — radius 12, px 16 / py 12, label 16/Medium.
 * Default → base, Hover → :hover, Pressed → :active  [confirmed colors].
 * http(s) links open in a new tab; mailto/tel open in place.
 */
type LinkTileProps = {
  href: string;
  label: string;
  icon?: IconName;
};

export function LinkTile({ href, label, icon }: LinkTileProps) {
  const external = /^https?:/i.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center gap-2 rounded-[12px] px-4 py-3",
        "text-[16px] leading-[1.4] font-medium whitespace-nowrap",
        "border-line bg-subtle text-ink border",
        "transition-colors duration-150 ease-out",
        "hover:border-accent hover:bg-accent hover:text-white",
        "active:border-accent-pressed active:bg-accent-pressed active:text-white",
      )}
    >
      {icon ? <Icon name={icon} /> : null}
      <span>{label}</span>
    </a>
  );
}
