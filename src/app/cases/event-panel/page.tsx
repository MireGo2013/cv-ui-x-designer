import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/sections/Header";
import { ChevronLeft } from "@/components/ui/IconButton";
import { eventPanelCase } from "@/data/content";

export const metadata: Metadata = {
  title: "EventPanel — кейс",
  description:
    "Платформа для управления аналитическими событиями: дизайн-система, Event Catalog, валидация схем.",
  alternates: { canonical: "/cases/event-panel" },
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

function ArrowRight() {
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
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function EventPanelPage() {
  const { title, role, tags, summary, mainImage, problem, insight, solutions, results } =
    eventPanelCase;

  return (
    <>
      <Header />

      <main className="container-content py-8 md:py-14">
        <div className="mx-auto max-w-[720px]">

          {/* Back button */}
          <Link
            href="/"
            aria-label="Назад на главную"
            className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-subtle text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white"
          >
            <ChevronLeft />
          </Link>

          {/* ── Title row ── */}
          <div className="mt-8 flex items-baseline justify-between gap-6">
            <h1 className="text-accent text-[42px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[56px]">
              {title}
            </h1>
            <span className="shrink-0 text-[15px] leading-[1.4] text-muted">{role}</span>
          </div>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
            {tags.map((tag, i) => (
              <span key={tag} className="flex items-center gap-2">
                {i > 0 && <span className="select-none text-muted">•</span>}
                <span className="text-[14px] text-muted">{tag}</span>
              </span>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-6 space-y-2">
            {summary.map((p, i) => (
              <p key={i} className="text-[15px] leading-[1.65] text-ink">
                {p}
              </p>
            ))}
          </div>

          {/* Main product screenshot */}
          <div className="mt-8 overflow-hidden rounded-[16px] border border-line bg-white shadow-sm">
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

          {/* ── Проблема ── */}
          <section className="mt-12" aria-labelledby="section-problem">
            <h2
              id="section-problem"
              className="text-[22px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink"
            >
              {problem.heading}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] text-ink">{problem.intro}</p>
            <p className="mt-4 text-[15px] leading-[1.65] text-ink">{problem.subheading}</p>
            <ul className="mt-2 space-y-1.5">
              {problem.items.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-[15px] leading-[1.65] text-ink">
                  <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-ink/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[15px] leading-[1.65] text-ink">{problem.outro}</p>
          </section>

          {/* ── Ключевой инсайт ── */}
          <section className="mt-12" aria-labelledby="section-insight">
            <h2
              id="section-insight"
              className="text-[22px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink"
            >
              {insight.heading}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] text-ink">{insight.intro}</p>
            <blockquote className="relative mt-5 rounded-r-[12px] bg-surface py-4 pl-5 pr-4">
              <span className="absolute inset-y-0 left-0 w-[3px] rounded-full bg-accent" />
              <p className="text-[15px] leading-[1.65] text-ink">{insight.quote}</p>
            </blockquote>
            <p className="mt-4 text-[15px] leading-[1.65] text-ink">{insight.outro}</p>
          </section>

          {/* ── Решения ── */}
          <section className="mt-12" aria-labelledby="section-solutions">
            <h2
              id="section-solutions"
              className="text-[22px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink"
            >
              {solutions.heading}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] text-ink">{solutions.intro}</p>

            <div className="mt-6 space-y-8">
              {solutions.items.map((item) => (
                <div key={item.title}>
                  <h3 className="text-[15px] font-semibold leading-[1.3] text-ink">
                    {item.title}
                  </h3>
                  <div className="mt-2 space-y-2">
                    {item.text.split("\n").map((line, i) => (
                      <p key={i} className="text-[15px] leading-[1.65] text-ink">
                        {line}
                      </p>
                    ))}
                  </div>
                  {item.image && (
                    <div className="mt-6 overflow-hidden rounded-[16px] border border-line bg-white shadow-sm">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        width={item.image.width}
                        height={item.image.height}
                        sizes="(max-width: 768px) 100vw, 720px"
                        className="h-auto w-full object-contain"
                      />
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
              className="text-[22px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink"
            >
              {results.heading}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] text-ink">{results.intro}</p>
            <p className="mt-4 text-[15px] font-semibold leading-[1.65] text-ink">
              {results.subheading}
            </p>
            <ul className="mt-2 space-y-1.5">
              {results.items.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-[15px] leading-[1.65] text-ink">
                  <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-ink/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[15px] leading-[1.65] text-ink">{results.outro}</p>
          </section>

          {/* ── Нижняя навигация ── */}
          <div className="mt-16 flex items-center justify-between border-t border-line pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-subtle px-5 py-2.5 text-[14px] font-medium text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white"
            >
              <ArrowLeft />
              К проектам
            </Link>
            <Link
              href="/cases/fleep-bot"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-subtle px-5 py-2.5 text-[14px] font-medium text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white"
            >
              Следующий кейс
              <ArrowRight />
            </Link>
          </div>

        </div>
      </main>

      <footer className="container-content border-t border-line py-8 text-center text-[14px] text-muted">
        © {new Date().getFullYear()} Алина Соболь
      </footer>
    </>
  );
}
