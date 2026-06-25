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
          <div className="border-line mt-8 overflow-hidden rounded-[16px] border bg-white shadow-sm">
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
              className="text-ink text-[22px] leading-[1.2] font-semibold tracking-[-0.01em]"
            >
              {problem.heading}
            </h2>
            <p className="text-ink mt-4 text-[15px] leading-[1.65]">{problem.intro}</p>
            <p className="text-ink mt-4 text-[15px] leading-[1.65]">{problem.subheading}</p>
            <ul className="mt-2 space-y-1.5">
              {problem.items.map((item, i) => (
                <li key={i} className="text-ink flex gap-2.5 text-[15px] leading-[1.65]">
                  <span className="bg-ink/40 mt-[9px] size-1.5 shrink-0 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-ink mt-4 text-[15px] leading-[1.65]">{problem.outro}</p>
          </section>

          {/* ── Ключевой инсайт ── */}
          <section className="mt-12" aria-labelledby="section-insight">
            <h2
              id="section-insight"
              className="text-ink text-[22px] leading-[1.2] font-semibold tracking-[-0.01em]"
            >
              {insight.heading}
            </h2>
            <p className="text-ink mt-4 text-[15px] leading-[1.65]">{insight.intro}</p>
            <blockquote className="bg-surface relative mt-5 rounded-r-[12px] py-4 pr-4 pl-5">
              <span className="bg-accent absolute inset-y-0 left-0 w-[3px] rounded-full" />
              <p className="text-ink text-[15px] leading-[1.65]">{insight.quote}</p>
            </blockquote>
            <p className="text-ink mt-4 text-[15px] leading-[1.65]">{insight.outro}</p>
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
                  <div className="mt-2 space-y-2">
                    {item.text.split("\n").map((line, i) => (
                      <p key={i} className="text-ink text-[15px] leading-[1.65]">
                        {line}
                      </p>
                    ))}
                  </div>
                  {item.image && (
                    <div className="border-line mt-6 overflow-hidden rounded-[16px] border bg-white shadow-sm">
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
              className="text-ink text-[22px] leading-[1.2] font-semibold tracking-[-0.01em]"
            >
              {results.heading}
            </h2>
            <p className="text-ink mt-4 text-[15px] leading-[1.65]">{results.intro}</p>
            <p className="text-ink mt-4 text-[15px] leading-[1.65] font-semibold">
              {results.subheading}
            </p>
            <ul className="mt-2 space-y-1.5">
              {results.items.map((item, i) => (
                <li key={i} className="text-ink flex gap-2.5 text-[15px] leading-[1.65]">
                  <span className="bg-ink/40 mt-[9px] size-1.5 shrink-0 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-ink mt-4 text-[15px] leading-[1.65]">{results.outro}</p>
          </section>

          {/* ── Нижняя навигация ── */}
          <div className="border-line mt-16 flex items-center justify-between border-t pt-8">
            <Link
              href="/"
              className="border-line bg-subtle text-ink hover:border-accent hover:bg-accent inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[14px] font-medium transition-colors hover:text-white"
            >
              <ArrowLeft />К проектам
            </Link>
            <Link
              href="/cases/fleep-bot"
              className="border-line bg-subtle text-ink hover:border-accent hover:bg-accent inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[14px] font-medium transition-colors hover:text-white"
            >
              Следующий кейс
              <ArrowRight />
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
