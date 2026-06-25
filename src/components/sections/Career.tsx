import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { career, mentorship, resumeUrl, type ExperienceItem } from "@/data/content";

/** One experience row: logo square + role/company + period. */
function ExperienceRow({ item }: { item: ExperienceItem }) {
  return (
    <li className="flex items-center gap-4 py-3">
      <div className="border-line relative size-13 shrink-0 overflow-hidden rounded-[12px] border bg-white">
        <Image
          src={item.logo}
          alt={`${item.company} — логотип`}
          fill
          sizes="52px"
          className="object-contain p-1.5"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-ink truncate text-[16px] leading-[1.3] font-medium md:text-[18px]">
          {item.role}
        </p>
        <p className="text-muted truncate text-[14px] leading-[1.3]">{item.company}</p>
      </div>
      <span className="text-muted shrink-0 text-[14px] md:text-[16px]">{item.period}</span>
    </li>
  );
}

/**
 * Career + Mentorship — Figma "Frame 427321981": one white Card holding the
 * Карьера list and the Менторство list. The top-right Button label sits inside a
 * top-right button downloads the CV file (Google Drive).
 */
export function Career() {
  return (
    <section id="career" className="container-content scroll-mt-24 py-8 md:py-12">
      <Card className="p-6 md:p-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-ink text-[22px] leading-[1.2] font-medium tracking-[-0.02em] md:text-[28px]">
            Карьера
          </h2>
          <Button as="a" href={resumeUrl} target="_blank" rel="noopener noreferrer">
            Скачать CV
          </Button>
        </div>
        <ul className="divide-line mt-4 divide-y">
          {career.map((item) => (
            <ExperienceRow key={`${item.company}-${item.period}`} item={item} />
          ))}
        </ul>

        <h2 className="text-ink mt-10 text-[22px] leading-[1.2] font-medium tracking-[-0.02em] md:text-[28px]">
          Менторство
        </h2>
        <ul className="divide-line mt-4 divide-y">
          {mentorship.map((item) => (
            <ExperienceRow key={`${item.company}-${item.period}`} item={item} />
          ))}
        </ul>
      </Card>
    </section>
  );
}
