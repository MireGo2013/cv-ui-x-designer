import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { career, mentorship, resumeUrl, type ExperienceItem } from "@/data/content";

function ExperienceRow({ item }: { item: ExperienceItem }) {
  return (
    <li className="border-line flex items-center gap-3 rounded-[12px] border bg-white px-5 py-3">
      <div className="relative size-[52px] shrink-0 overflow-hidden rounded-full">
        <Image
          src={item.logo}
          alt={`${item.company} — логотип`}
          fill
          sizes="52px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-ink truncate text-[18px] leading-[1.3] font-normal md:text-[20px]">
          {item.role}
        </p>
        <p className="text-muted truncate text-[14px] leading-[1.3]">{item.company}</p>
      </div>
      <span className="text-muted shrink-0 text-[14px] leading-[1.3] md:text-[16px]">
        {item.period}
      </span>
    </li>
  );
}

export function Career() {
  return (
    <section id="career" className="container-content scroll-mt-24 py-8 md:py-12">
      <Card className="p-6 md:p-10">
        <div className="flex flex-col gap-[52px]">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-ink text-[22px] leading-[1.2] font-medium tracking-[-0.02em] md:text-[28px]">
                Карьера
              </h2>
              <Button
                as="a"
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFFFFF]"
              >
                Скачать CV
              </Button>
            </div>
            <ul className="flex flex-col gap-2">
              {career.map((item) => (
                <ExperienceRow key={`${item.company}-${item.period}`} item={item} />
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-ink text-[22px] leading-[1.2] font-medium tracking-[-0.02em] md:text-[28px]">
              Менторство
            </h2>
            <ul className="flex flex-col gap-2">
              {mentorship.map((item) => (
                <ExperienceRow key={`${item.company}-${item.period}`} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
}
