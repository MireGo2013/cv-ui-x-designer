import type { ReactNode } from "react";
import { Header } from "@/components/sections/Header";
import { Button } from "@/components/ui/Button";
import { IconButton, ChevronLeft } from "@/components/ui/IconButton";
import { Paragraphs } from "@/components/case/CaseContent";

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

/**
 * Case page shell — Figma "Теплинг" (desktop 2069:11134 / mobile 2074:11792).
 * Header → back button → 880px content column → «К проектам» → footer.
 * Column gaps: 30px mobile / 40px desktop.
 */
export function CaseLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />

      <main className="container-content pt-6 pb-16 md:pt-8 md:pb-[100px]">
        <div className="mx-auto flex max-w-[880px] flex-col items-start gap-[30px] md:gap-10">
          <IconButton href="/" label="Назад на главную">
            <ChevronLeft />
          </IconButton>

          <article className="flex w-full flex-col gap-[30px] md:gap-10">{children}</article>

          <Button as="a" href="/">
            <ArrowLeft />К проектам
          </Button>
        </div>
      </main>

      <footer className="container-content border-line text-muted border-t py-8 text-center text-[14px]">
        © {new Date().getFullYear()} Алина Соболь
      </footer>
    </>
  );
}

/** Case title row: accent H1 + role chip, followed by lead paragraphs. */
export function CaseIntro({
  title,
  role,
  summary,
  children,
}: {
  title: string;
  role: string;
  summary: readonly string[];
  children?: ReactNode;
}) {
  return (
    <header className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <h1 className="text-accent-pressed min-w-0 flex-1 text-[28px] leading-[1.2] font-medium tracking-[-0.02em] md:text-[36px]">
          {title}
        </h1>
        <span className="border-line bg-subtle text-ink shrink-0 rounded-full border px-3 py-1.5 text-[14px] leading-[1.4] font-medium">
          {role}
        </span>
      </div>
      <Paragraphs items={summary} />
      {children}
    </header>
  );
}
