import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { ChevronLeft } from "@/components/ui/IconButton";
import { telderiCase, telderiSegmentTable, type SegmentTableData } from "@/data/content";

export const metadata: Metadata = {
  title: "Telderi — кейс",
  description:
    "Редизайн маркетплейса цифровых активов: личный кабинет, создание лота, А/В-тестирование.",
  alternates: { canonical: "/cases/telderi" },
};

// ─── Segmentation table ──────────────────────────────────────────────────────

function SegmentTable({ data }: { data: SegmentTableData }) {
  return (
    <div className="overflow-x-auto rounded-[16px] border border-line">
      <table className="w-full min-w-[760px] border-collapse text-[13px] leading-[1.55]">
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
                className="border-b border-r border-line px-3 py-3 text-left last:border-r-0"
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
          {data.rows.map((row, i) => (
            <tr key={i} className="border-b border-line last:border-b-0">
              <td className="border-r border-line px-2 py-3 text-center align-top text-[12px] text-muted">
                {i + 1}
              </td>
              <td className="border-r border-line px-3 py-3 align-top text-[12px] font-medium leading-[1.4] text-ink">
                {row.label}
              </td>
              {row.cells.map((cell, j) => (
                <td key={j} className="border-r border-line px-3 py-3 align-top last:border-r-0">
                  {cell.length === 1 ? (
                    <p className="text-ink">{cell[0]}</p>
                  ) : (
                    <ul className="space-y-1.5">
                      {cell.map((item, k) => (
                        <li key={k} className="flex gap-2 text-ink">
                          <span className="mt-[6px] size-1 shrink-0 rounded-full bg-muted" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function TelderiPage() {
  const { title, role, tags, summary, context, problem, research } = telderiCase;

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
              className="text-ink text-[22px] font-semibold leading-[1.2] tracking-[-0.01em]"
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
              className="text-ink text-[22px] font-semibold leading-[1.2] tracking-[-0.01em]"
            >
              {problem.heading}
            </h2>
            <p className="mt-4 text-ink text-[15px] leading-[1.65]">{problem.text}</p>
          </section>

          {/* ── Исследование ── */}
          <section className="mt-12" aria-labelledby="section-research">
            <h2
              id="section-research"
              className="text-ink text-[22px] font-semibold leading-[1.2] tracking-[-0.01em]"
            >
              {research.heading}
            </h2>
            <p className="mt-4 text-ink text-[15px] leading-[1.65]">{research.intro}</p>

            {/* Ключевые роли */}
            <p className="mt-5 text-[15px] font-semibold text-ink">{research.rolesLabel}</p>
            <ul className="mt-2 space-y-2">
              {research.roles.map((role, i) => (
                <li key={i} className="flex gap-2.5 text-[15px] leading-[1.65] text-ink">
                  <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-ink/40" />
                  <span>{role}</span>
                </li>
              ))}
            </ul>

            {/* Segmentation table */}
            <p className="mt-8 text-[15px] font-semibold text-ink">{research.tableLabel}</p>
            <div className="mt-3">
              <SegmentTable data={telderiSegmentTable} />
            </div>

            {/* Главные боли */}
            <p className="mt-8 text-[15px] font-semibold text-ink">{research.painsLabel}</p>
            <ol className="mt-2 space-y-2">
              {research.pains.map((pain, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-[1.65] text-ink">
                  <span className="mt-px w-5 shrink-0 text-right text-muted">{i + 1}.</span>
                  <span>{pain}</span>
                </li>
              ))}
            </ol>
          </section>

        </div>
      </main>

      <footer className="container-content border-line text-muted border-t py-8 text-center text-[14px]">
        © {new Date().getFullYear()} Алина Соболь
      </footer>
    </>
  );
}
