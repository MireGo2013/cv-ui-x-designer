import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { Header } from "@/components/sections/Header";
import { ChevronLeft } from "@/components/ui/IconButton";
import { telderiCase, telderiSegmentTable, type SegmentTableData } from "@/data/content";

// SVG arrows for bottom nav
function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  );
}
function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Telderi — кейс",
  description:
    "Редизайн маркетплейса цифровых активов: личный кабинет, создание лота, А/В-тестирование.",
  alternates: { canonical: "/cases/telderi" },
};

// ─── Segmentation table ──────────────────────────────────────────────────────

const ROW_ACCENT: Record<string, string> = {
  pain: "bg-rose-50",
  need: "bg-emerald-50",
  want: "bg-[#eff2ff]",
};

function SegmentTable({ data }: { data: SegmentTableData }) {
  return (
    // Outer scroll container — never squeezes the table
    <div className="overflow-x-auto rounded-[16px] border border-line">
      <table
        className="border-collapse text-[13px] leading-[1.55]"
        style={{ minWidth: "1020px", width: "max-content" }}
      >
        <thead>
          <tr className="bg-surface">
            <th
              scope="col"
              className="w-9 border-b border-r border-line px-2 py-3 text-center text-[11px] font-medium text-muted"
            >
              №
            </th>
            <th
              scope="col"
              className="w-[170px] border-b border-r border-line px-3 py-3 text-left text-[11px] font-medium text-muted"
            >
              Характеристики
            </th>
            {data.columns.map((col) => (
              <th
                key={col.label}
                scope="col"
                className="w-[210px] border-b border-r border-line px-3 py-3 text-left last:border-r-0"
              >
                <span className="block text-[12px] font-semibold text-ink">{col.label}</span>
                <span className="mt-0.5 block text-[11px] font-normal text-muted">
                  {col.subtitle}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => {
            const bg = row.accent ? ROW_ACCENT[row.accent] : undefined;
            return (
              <tr key={i} className={cn("border-b border-line last:border-b-0", bg)}>
                <td className="border-r border-line px-2 py-3 text-center align-top text-[12px] text-muted">
                  {i + 1}
                </td>
                <td className="border-r border-line px-3 py-3 align-top text-[12px] font-semibold leading-[1.4] text-ink">
                  {row.label}
                </td>
                {row.cells.map((cell, j) => (
                  <td
                    key={j}
                    className="border-r border-line px-3 py-3 align-top last:border-r-0"
                  >
                    {cell.length === 1 ? (
                      <p className="text-ink">{cell[0]}</p>
                    ) : (
                      <ul className="space-y-1.5">
                        {cell.map((item, k) => (
                          <li key={k} className="flex gap-2 text-ink">
                            <span className="mt-[6px] size-1 shrink-0 rounded-full bg-muted/70" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function TelderiPage() {
  const { title, role, tags, summary, context, problem, research, goals, solutions, results } = telderiCase;

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
            <span className="text-muted shrink-0 text-[15px] leading-[1.4]">{role}</span>
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

          {/* ── Контекст ── */}
          <section className="mt-12" aria-labelledby="section-context">
            <h2
              id="section-context"
              className="text-[22px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink"
            >
              {context.heading}
            </h2>
            <div className="mt-4 space-y-4">
              {context.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] leading-[1.65] text-ink">
                  {p}
                </p>
              ))}
            </div>
          </section>

          {/* ── Проблема ── */}
          <section className="mt-12" aria-labelledby="section-problem">
            <h2
              id="section-problem"
              className="text-[22px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink"
            >
              {problem.heading}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] text-ink">{problem.text}</p>
          </section>

          {/* ── Исследование ── */}
          <section className="mt-12" aria-labelledby="section-research">
            <h2
              id="section-research"
              className="text-[22px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink"
            >
              {research.heading}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] text-ink">{research.intro}</p>

            {/* Ключевые роли */}
            <p className="mt-5 text-[15px] font-semibold text-ink">{research.rolesLabel}</p>
            <ul className="mt-2 space-y-2">
              {research.roles.map((r, i) => (
                <li key={i} className="flex gap-2.5 text-[15px] leading-[1.65] text-ink">
                  <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-ink/40" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            {/* Segmentation table — breaks out of the 720px column via -mx so it can breathe */}
            <div className="mt-8 -mx-4 md:-mx-0">
              <SegmentTable data={telderiSegmentTable} />
            </div>

            {/* Главные боли — 2×2 grid with tag chips */}
            <p className="mt-10 text-[15px] font-semibold text-ink">{research.painsLabel}</p>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {research.pains.map((pain, i) => (
                <div key={i}>
                  <p className="text-[15px] font-semibold text-ink">
                    {i + 1}. {pain.title}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {pain.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-accent/10 px-3 py-1 text-[13px] leading-[1.3] text-accent"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Цитаты из интервью */}
            <div className="mt-8 space-y-3">
              {research.quotes.map((q, i) => (
                <blockquote
                  key={i}
                  className="relative rounded-r-[12px] bg-surface py-4 pl-5 pr-4"
                >
                  {/* Accent left bar */}
                  <span className="absolute inset-y-0 left-0 w-[3px] rounded-full bg-accent" />
                  <p className="text-[15px] leading-[1.65] text-ink">«{q.text}»</p>
                  <cite className="mt-1.5 block text-[13px] not-italic text-muted">
                    — {q.author}
                  </cite>
                </blockquote>
              ))}
            </div>

          </section>

          {/* ── Цели ── */}
          <section className="mt-12" aria-labelledby="section-goals">
            <h2
              id="section-goals"
              className="text-[22px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink"
            >
              {goals.heading}
            </h2>
            <div className="mt-5 space-y-6">
              {goals.groups.map((group) => (
                <div key={group.label}>
                  <p className="text-[15px] font-semibold text-ink">{group.label}</p>
                  <ul className="mt-2 space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[15px] leading-[1.65] text-ink">
                        <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-ink/40" />
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
              className="text-[22px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink"
            >
              {solutions.heading}
            </h2>

            <div className="mt-6 space-y-12">
              {solutions.items.map((item) => (
                <div key={item.title}>
                  <h3 className="text-[17px] font-semibold leading-[1.3] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.65] text-ink">
                    {item.description}
                  </p>
                  {/* Images */}
                  {item.images.length > 0 && (
                    <div className="mt-6 space-y-4">
                      {item.images.map((img) => (
                        <div
                          key={img.src}
                          className="overflow-hidden rounded-[16px] border border-line bg-white shadow-sm"
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            width={img.width}
                            height={img.height}
                            sizes="(max-width: 768px) 100vw, 720px"
                            className="h-auto w-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Subsections — А/В-тест and similar */}
                  {item.subsections.length > 0 && (
                    <div className="mt-8 space-y-6">
                      {item.subsections.map((sub) => (
                        <div key={sub.title}>
                          <h4 className="text-[15px] font-semibold leading-[1.3] text-ink">
                            {sub.title}
                          </h4>
                          <p className="mt-2 text-[15px] leading-[1.65] text-ink">{sub.text}</p>
                          {sub.highlight && (
                            <blockquote className="relative mt-4 rounded-r-[12px] bg-surface py-4 pl-5 pr-4">
                              <span className="absolute inset-y-0 left-0 w-[3px] rounded-full bg-accent" />
                              <p className="text-[15px] leading-[1.65] text-ink">{sub.highlight}</p>
                            </blockquote>
                          )}
                          {sub.image && (
                            <div className="mt-6 overflow-hidden rounded-[16px] border border-line bg-white shadow-sm">
                              <Image
                                src={sub.image}
                                alt={sub.title}
                                width={1200}
                                height={800}
                                sizes="(max-width: 768px) 100vw, 720px"
                                className="h-auto w-full object-contain"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ── Результаты ── */}
          <section className="mt-12" aria-labelledby="section-results">
            <h2
              id="section-results"
              className="text-[22px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink"
            >
              {results.heading}
            </h2>
            <ul className="mt-5 space-y-3">
              {results.items.map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-[1.65] text-ink">
                  <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-ink/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
              href="/cases/event-panel"
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
