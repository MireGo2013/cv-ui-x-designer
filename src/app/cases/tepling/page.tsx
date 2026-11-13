import type { Metadata } from "next";
import Image from "next/image";
import { CaseLayout, CaseIntro } from "@/components/case/CaseLayout";
import {
  CaseSection,
  Paragraphs,
  Label,
  BulletGroup,
  CaseFigure,
} from "@/components/case/CaseContent";
import { teplingCase } from "@/data/content";

export const metadata: Metadata = {
  title: "Теплинг — кейс",
  description:
    "Корпоративный сайт производителя промышленных теплиц: каталог от культуры, шаблоны страниц продукта и форма расчёта вместо прайса.",
  alternates: { canonical: "/cases/tepling" },
};

export default function TeplingPage() {
  const { title, role, summary, cover, context, problem, research, goals, solutions, results } =
    teplingCase;

  return (
    <CaseLayout>
      <CaseIntro title={title} role={role} summary={summary}>
        <div className="py-3">
          <Image
            src={cover.src}
            alt={cover.alt}
            width={cover.width}
            height={cover.height}
            sizes="(max-width: 768px) 100vw, 880px"
            className="h-auto w-full"
            priority
          />
        </div>
      </CaseIntro>

      <CaseSection title={context.heading}>
        <Paragraphs items={context.paragraphs} />
      </CaseSection>

      <CaseSection title={problem.heading}>
        <Paragraphs items={problem.paragraphs} />
      </CaseSection>

      <CaseSection title={research.heading}>
        <div className="flex flex-col gap-4">
          <Paragraphs items={[research.intro]} />

          {/* Ключевые роли — accent rule on the left */}
          <div className="flex flex-col gap-3">
            <Label>{research.rolesLabel}</Label>
            <ul className="flex flex-col gap-2">
              {research.roles.map((r) => (
                <li
                  key={r.title}
                  className="border-accent-pressed flex flex-col gap-0.5 border-l-2 px-3 leading-[1.3]"
                >
                  <span className="text-ink text-[16px]">{r.title}</span>
                  <span className="text-muted/80 text-[14px]">{r.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Главные боли — 2 columns on desktop, chips under each */}
          <div className="flex flex-col gap-3">
            <Label>{research.painsLabel}</Label>
            <ol className="grid gap-3 md:grid-cols-2">
              {research.pains.map((pain, i) => (
                <li key={pain.title} className="flex flex-col gap-2">
                  <p className="text-ink text-[16px] leading-[1.3] font-medium">
                    <span className="inline-block w-6">{i + 1}.</span>
                    {pain.title}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {pain.chips.map((chip) => (
                      <span
                        key={chip}
                        className="text-muted bg-[#f3f4f9] p-0.5 text-[14px] leading-[1.3]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </CaseSection>

      <CaseSection title={goals.heading}>
        <div className="flex flex-col gap-2">
          {goals.groups.map((g) => (
            <BulletGroup key={g.label} label={g.label} items={g.items} />
          ))}
        </div>
      </CaseSection>

      <CaseSection title={solutions.heading}>
        <div className="flex flex-col gap-2">
          {solutions.items.map((item) => (
            <div key={item.title} className="flex flex-col gap-0.5">
              <Label>{item.title}</Label>
              <Paragraphs items={[item.text]} />
              {item.image && <CaseFigure {...item.image} />}
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection title={results.heading}>
        <BulletGroup label={results.lead} items={results.items} />
      </CaseSection>
    </CaseLayout>
  );
}
