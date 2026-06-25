import { LinkTile } from "@/components/ui/LinkTile";
import { contacts } from "@/data/content";

/**
 * Contacts — Figma "About" CTA band: centered heading + subheading + social
 * link tiles. Heading ~36/Medium centered. [verify size] Link labels [verify].
 */
export function Contacts() {
  return (
    <section
      id="contacts"
      className="container-content scroll-mt-24 py-12 md:py-20"
      aria-labelledby="contacts-heading"
    >
      <div className="mx-auto flex max-w-[680px] flex-col items-center text-center">
        <h2
          id="contacts-heading"
          className="text-ink text-[28px] leading-[1.2] font-medium tracking-[-0.02em] md:text-[36px]"
        >
          {contacts.heading}
        </h2>
        <p className="text-muted mt-4 text-[18px] leading-[1.4] md:text-[20px]">
          {contacts.subheading}
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {contacts.links.map((link) => (
            <li key={link.label}>
              <LinkTile href={link.href} label={link.label} icon={link.icon} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
