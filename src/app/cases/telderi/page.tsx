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
    <div className="border-line overflow-x-auto rounded-[16px] border">
      <table
        className="border-collapse text-[13px] leading-[1.55]"
        style={{ minWidth: "1020px", width: "max-content" }}
      >
        <thead>
          <tr className="bg-surface">
            <th
              scope="col"
              className="border-line text-muted w-9 border-r border-b px-2 py-3 text-center text-[11px] font-medium"
            >
              №
            </th>
            <th
              scope="col"
              className="border-line text-muted w-[170px] border-r border-b px-3 py-3 text-left text-[11px] font-medium"
            >
              Характеристики
            </th>
            {data.columns.map((col) => (
              <th
                key={col.label}
                scope="col"
                className="border-line w-[210px] border-r border-b px-3 py-3 text-left last:border-r-0"
              >
                <span className="text-ink block text-[12px] font-semibold">{col.label}</span>
                <span className="text-muted mt-0.5 block text-[11px] font-normal">
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
              <tr key={i} className={cn("border-line border-b last:border-b-0", bg)}>
                <td className="border-line text-muted border-r px-2 py-3 text-center align-top text-[12px]">
                  {i + 1}
                </td>
                <td className="border-line text-ink border-r px-3 py-3 align-top text-[12px] leading-[1.4] font-semibold">
                  {row.label}
                </td>
                {row.cells.map((cell, j) => (
                  <td key={j} className="border-line border-r px-3 py-3 align-top last:border-r-0">
                    {cell.length === 1 ? (
                      <p className="text-ink">{cell[0]}</p>
                    ) : (
                      <ul className="space-y-1.5">
                        {cell.map((item, k) => (
                          <li key={k} className="text-ink flex gap-2">
                            <span className="bg-muted/70 mt-[6px] size-1 shrink-0 rounded-full" />
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
  const { title, role, tags, summary, context, problem, research, goals, solutions, results } =
    telderiCase;

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

          {/* ── Контекст ── */}
          <section className="mt-12" aria-labelledby="section-context">
            <h2
              id="section-context"
              className="text-ink text-[22px] leading-[1.2] font-semibold tracking-[-0.01em]"
            >
              {context.heading}
            </h2>
            <div className="mt-4 space-y-4">
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
            <p className="text-ink mt-4 text-[15px] leading-[1.65]">{problem.text}</p>
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

            {/* Ключевые роли */}
            <p className="text-ink mt-5 text-[15px] font-semibold">{research.rolesLabel}</p>
            <ul className="mt-2 space-y-2">
              {research.roles.map((r, i) => (
                <li key={i} className="text-ink flex gap-2.5 text-[15px] leading-[1.65]">
                  <span className="bg-ink/40 mt-[9px] size-1.5 shrink-0 rounded-full" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            {/* Segmentation table — breaks out of the 720px column via -mx so it can breathe */}
            <div className="-mx-4 mt-8 md:-mx-0">
              <SegmentTable data={telderiSegmentTable} />
            </div>

            {/* Главные боли — 2×2 grid with tag chips */}
            <p className="text-ink mt-10 text-[15px] font-semibold">{research.painsLabel}</p>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {research.pains.map((pain, i) => (
                <div key={i}>
                  <p className="text-ink text-[15px] font-semibold">
                    {i + 1}. {pain.title}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {pain.items.map((item) => (
                      <span
                        key={item}
                        className="bg-accent/10 text-accent rounded-full px-3 py-1 text-[13px] leading-[1.3]"
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
                <blockquote key={i} className="bg-surface relative rounded-r-[12px] py-4 pr-4 pl-5">
                  {/* Accent left bar */}
                  <span className="bg-accent absolute inset-y-0 left-0 w-[3px] rounded-full" />
                  <p className="text-ink text-[15px] leading-[1.65]">«{q.text}»</p>
                  <cite className="text-muted mt-1.5 block text-[13px] not-italic">
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

            <div className="mt-6 space-y-12">
              {solutions.items.map((item) => (
                <div key={item.title}>
                  <h3 className="text-ink text-[17px] leading-[1.3] font-semibold">{item.title}</h3>
                  <p className="text-ink mt-2 text-[15px] leading-[1.65]">{item.description}</p>
                  {/* Images */}
                  {item.images.length > 0 && (
                    <div className="mt-6 space-y-4">
                      {item.images.map((img) => (
                        <div key={img.src} className="border-line overflow-hidden rounded-[16px]">
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
                          <h4 className="text-ink text-[15px] leading-[1.3] font-semibold">
                            {sub.title}
                          </h4>
                          <p className="text-ink mt-2 text-[15px] leading-[1.65]">{sub.text}</p>
                          {sub.highlight && (
                            <blockquote className="bg-surface relative mt-4 rounded-r-[12px] py-4 pr-4 pl-5">
                              <span className="bg-accent absolute inset-y-0 left-0 w-[3px] rounded-full" />
                              <p className="text-ink text-[15px] leading-[1.65]">{sub.highlight}</p>
                            </blockquote>
                          )}
                          {sub.image && (
                            <div className="border-line mt-6 overflow-hidden rounded-[16px]">
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
              className="text-ink text-[22px] leading-[1.2] font-semibold tracking-[-0.01em]"
            >
              {results.heading}
            </h2>
            <ul className="mt-5 space-y-3">
              {results.items.map((item, i) => (
                <li key={i} className="text-ink flex gap-3 text-[15px] leading-[1.65]">
                  <span className="bg-ink/40 mt-[9px] size-1.5 shrink-0 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
              href="/cases/event-panel"
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
