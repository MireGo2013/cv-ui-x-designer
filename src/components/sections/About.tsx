import { SectionHeading } from "@/components/ui/Card";
import { about, skills } from "@/data/content";

/**
 * About + Skills — Figma "About" band: two 576px columns (Обо мне / Навыки).
 * Skills = 2×2 grid of informational tiles (radius 12, padding 16). [confirmed layout]
 */
export function About() {
  return (
    <section
      id="about"
      className="container-content scroll-mt-24 py-8 md:py-12"
      aria-labelledby="about-heading"
    >
      <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
        {/* Обо мне */}
        <div>
          <SectionHeading id="about-heading">{about.heading}</SectionHeading>
          <div className="mt-6 flex flex-col gap-4">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-muted text-[16px] leading-[1.5] md:text-[18px]">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Навыки */}
        <div>
          <SectionHeading>Навыки</SectionHeading>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {skills.map((group) => (
              <li key={group.title} className="border-line bg-subtle rounded-[12px] border p-4">
                <h3 className="text-ink text-[16px] leading-[1.4] font-medium">{group.title}</h3>
                <div className="mt-2 flex flex-col gap-1.5">
                  {group.items.map((item) => (
                    <p key={item} className="text-muted text-[14px] leading-[1.4]">
                      {item}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
