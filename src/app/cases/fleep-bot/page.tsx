import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/sections/Header";
import { ChevronLeft } from "@/components/ui/IconButton";
import { fleepBotCase } from "@/data/content";

export const metadata: Metadata = {
  title: "Fleep.bot — кейс",
  description:
    "Редизайн онбординга и ключевых сценариев Telegram-платформы: рост активации +28%, конверсия в первого бота +35%.",
  alternates: { canonical: "/cases/fleep-bot" },
};

function ArrowLeft() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  );
}

/** Arrow between before/after phone screens. Points right on desktop, down on mobile. */
function BeforeAfterArrow() {
  return (
    <div className="flex shrink-0 items-center justify-center md:self-center">
      {/* Desktop: → */}
      <svg
        className="hidden md:block"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      {/* Mobile: ↓ */}
      <svg
        className="block md:hidden"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </div>
  );
}

export default function FleepBotPage() {
  const {
    title,
    role,
    tags,
    summary,
    mainImage,
    context,
    problem,
    research,
    goals,
    solutions,
    results,
  } = fleepBotCase;

  return (
    <>
      <Header />

      <main className="container-content py-8 md:py-14">
        <div className="mx-auto max-w-[720px]">
          {/* Back button */}
          <Link
            href="/"
            aria-label="Назад на главную"
            className="border-line bg-subtle text-ink hover:border-accent hover:bg-accent inline-flex size-10 items-center justify-center rounded-full border transition-colors hover:text-white"
          >
            <ChevronLeft />
          </Link>

          {/* ── Title row ── */}
          <div className="mt-8 flex items-baseline justify-between gap-6">
            <h1 className="text-accent text-[42px] leading-[1.05] font-semibold tracking-[-0.03em] md:text-[56px]">
              {title}
            </h1>
            <span className="text-muted bg-line shrink-0 rounded-full px-3 py-1.5 text-[15px] leading-[1.4]">
              {role}
            </span>
          </div>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
            {tags.map((tag, i) => (
              <span key={tag} className="flex items-center gap-2">
                {i > 0 && <span className="text-muted select-none">•</span>}
                <span className="text-muted text-[14px]">{tag}</span>
              </span>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-6 space-y-2">
            {summary.map((p, i) => (
              <p key={i} className="text-ink text-[15px] leading-[1.65]">
                {p}
              </p>
            ))}
          </div>

          {/* Main product screenshot */}
          <div className="mt-8 overflow-hidden rounded-[16px]">
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              width={mainImage.width}
              height={mainImage.height}
              sizes="(max-width: 768px) 100vw, 720px"
              className="h-auto w-full object-contain"
              priority
            />
          </div>

          {/* ── Контекст ── */}
          <section className="mt-12" aria-labelledby="section-context">
            <h2
              id="section-context"
              className="text-ink text-[22px] leading-[1.2] font-semibold tracking-[-0.01em]"
            >
              {context.heading}
            </h2>
            <div className="mt-4 space-y-3">
              {context.paragraphs.map((p, i) => (
                <p key={i} className="text-ink text-[15px] leading-[1.65]">
                  {p}
                </p>
              ))}
            </div>
          </section>

          {/* ── Проблема ── */}
          <section className="mt-12" aria-labelledby="section-problem">
            <h2
              id="section-problem"
              className="text-ink text-[22px] leading-[1.2] font-semibold tracking-[-0.01em]"
            >
              {problem.heading}
            </h2>
            <p className="text-ink mt-4 text-[15px] leading-[1.65]">{problem.intro}</p>
            <p className="text-ink mt-3 text-[15px] leading-[1.65]">{problem.subheading}</p>
            <ul className="mt-2 space-y-1.5">
              {problem.items.map((item, i) => (
                <li key={i} className="text-ink flex gap-2.5 text-[15px] leading-[1.65]">
                  <span className="bg-ink/40 mt-[9px] size-1.5 shrink-0 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-ink mt-3 text-[15px] leading-[1.65]">{problem.outro}</p>
          </section>

          {/* ── Исследование ── */}
          <section className="mt-12" aria-labelledby="section-research">
            <h2
              id="section-research"
              className="text-ink text-[22px] leading-[1.2] font-semibold tracking-[-0.01em]"
            >
              {research.heading}
            </h2>
            <p className="text-ink mt-4 text-[15px] leading-[1.65]">{research.intro}</p>

            <p className="text-ink mt-4 text-[15px] font-semibold">{research.insightsLabel}</p>
            <ul className="mt-2 space-y-1.5">
              {research.insights.map((item, i) => (
                <li key={i} className="text-ink flex gap-2.5 text-[15px] leading-[1.65]">
                  <span className="bg-ink/40 mt-[9px] size-1.5 shrink-0 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-ink mt-5 text-[15px] font-semibold">{research.quotesLabel}</p>
            <div className="mt-2 space-y-2">
              {research.quotes.map((q, i) => (
                <blockquote key={i} className="bg-surface relative rounded-r-[12px] py-3 pr-4 pl-5">
                  <span className="bg-accent absolute inset-y-0 left-0 w-[3px] rounded-full" />
                  <p className="text-ink text-[15px] leading-[1.65]">{q}</p>
                </blockquote>
              ))}
            </div>

            <p className="text-ink mt-4 text-[15px] leading-[1.65]">{research.outro}</p>
          </section>

          {/* ── Цели ── */}
          <section className="mt-12" aria-labelledby="section-goals">
            <h2
              id="section-goals"
              className="text-ink text-[22px] leading-[1.2] font-semibold tracking-[-0.01em]"
            >
              {goals.heading}
            </h2>
            <div className="mt-5 space-y-6">
              {goals.groups.map((group) => (
                <div key={group.label}>
                  <p className="text-ink text-[15px] font-semibold">{group.label}</p>
                  <ul className="mt-2 space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-ink flex gap-2.5 text-[15px] leading-[1.65]">
                        <span className="bg-ink/40 mt-[9px] size-1.5 shrink-0 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ── Решения ── */}
          <section className="mt-12" aria-labelledby="section-solutions">
            <h2
              id="section-solutions"
              className="text-ink text-[22px] leading-[1.2] font-semibold tracking-[-0.01em]"
            >
              {solutions.heading}
            </h2>
            <p className="text-ink mt-4 text-[15px] leading-[1.65]">{solutions.intro}</p>

            <div className="mt-6 space-y-8">
              {solutions.items.map((item) => (
                <div key={item.title}>
                  <h3 className="text-ink text-[15px] leading-[1.3] font-semibold">{item.title}</h3>
                  <p className="text-ink mt-2 text-[15px] leading-[1.65]">{item.text}</p>

                  {/* Before → After phone screens */}
                  {item.beforeAfter && (
                    <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:items-end md:gap-3">
                      <div className="w-full max-w-[260px] overflow-hidden rounded-[24px] ring-3 ring-[#F3F3F9] md:mb-[80px] md:flex-1">
                        <Image
                          src={item.beforeAfter.before.src}
                          alt={item.beforeAfter.before.alt}
                          width={390}
                          height={798}
                          sizes="(max-width: 768px) 260px, 320px"
                          className="h-auto w-full object-contain"
                        />
                      </div>
                      <BeforeAfterArrow />
                      <div className="w-full max-w-[260px] overflow-hidden rounded-[24px] ring-3 ring-[#F3F3F9] md:flex-1">
                        <Image
                          src={item.beforeAfter.after.src}
                          alt={item.beforeAfter.after.alt}
                          width={390}
                          height={798}
                          sizes="(max-width: 768px) 260px, 320px"
                          className="h-auto w-full object-contain"
                        />
                      </div>
                    </div>
                  )}

                  {/* Single centered phone image */}
                  {item.singleImage && (
                    <div className="mt-6 flex justify-center">
                      <div className="w-full max-w-[300px] overflow-hidden rounded-[24px]">
                        <Image
                          src={item.singleImage.src}
                          alt={item.singleImage.alt}
                          width={390}
                          height={798}
                          sizes="300px"
                          className="h-auto w-full object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ── Итоги ── */}
          <section className="mt-12" aria-labelledby="section-results">
            <h2
              id="section-results"
              className="text-ink text-[22px] leading-[1.2] font-semibold tracking-[-0.01em]"
            >
              {results.heading}
            </h2>
            <div className="mt-4 space-y-2">
              {results.paragraphs.map((p, i) => (
                <p key={i} className="text-ink text-[15px] leading-[1.65]">
                  {p}
                </p>
              ))}
            </div>
          </section>

          {/* ── Нижняя навигация ── */}
          <div className="border-line mt-16 flex items-center border-t pt-8">
            <Link
              href="/"
              className="border-line bg-subtle text-ink hover:border-accent hover:bg-accent inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[14px] font-medium transition-colors hover:text-white"
            >
              <ArrowLeft />К проектам
            </Link>
          </div>
        </div>
      </main>

      <footer className="container-content border-line text-muted border-t py-8 text-center text-[14px]">
        © {new Date().getFullYear()} Алина Соболь
      </footer>
    </>
  );
}
