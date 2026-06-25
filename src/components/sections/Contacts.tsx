import { contacts } from "@/data/content";

export function Contacts() {
  return (
    <section
      id="contacts"
      className="container-content scroll-mt-24 py-16 md:py-[110px]"
      aria-labelledby="contacts-heading"
    >
      <div className="mx-auto flex max-w-[680px] flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-3">
          <h2
            id="contacts-heading"
            className="text-ink text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[40px]"
          >
            Открыта к{" "}
            <span className="text-accent-pressed">новым проектам</span>
            {" "}и сотрудничеству
          </h2>
          <p className="text-muted text-[18px] leading-[1.2] md:text-[24px]">
            {contacts.subheading}
          </p>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {contacts.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-subtle border-line text-ink block rounded-[12px] border px-4 py-3 text-[16px] font-medium leading-[1.4] transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
