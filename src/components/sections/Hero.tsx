import { Avatar } from "@/components/ui/Avatar";
import { Card } from "@/components/ui/Card";
import { profile } from "@/data/content";

/**
 * Hero — Figma "1 block": centered group of Avatar (200px) + white Card with
 * name (36/Medium/-0.72px) and role (18/Regular). [confirmed]
 * Mobile: avatar (80px) stacked above the text. [confirmed sizes]
 */
export function Hero() {
  return (
    <section id="top" className="container-content scroll-mt-24 pt-10 pb-8 md:pt-14 md:pb-12">
      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-center md:gap-8 md:text-left">
        <Avatar
          src="/images/avatar.webp"
          alt="Алина Соболь"
          initials="АС"
          className="size-20 shrink-0 md:size-[200px]"
        />
        <Card className="w-full max-w-[680px] border-none bg-transparent p-6 md:w-auto md:p-8">
          <h1 className="text-ink text-[28px] leading-[1.2] font-medium tracking-[-0.02em] md:text-[36px]">
            {profile.name}
          </h1>
          <p className="text-muted mt-3 text-[16px] leading-[1.4] md:text-[18px] md:leading-[1.3]">
            {profile.role}
          </p>
        </Card>
      </div>
    </section>
  );
}
