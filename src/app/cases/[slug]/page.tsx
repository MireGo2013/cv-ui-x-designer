import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/sections/Header";
import { Card } from "@/components/ui/Card";
import { IconButton, ChevronLeft } from "@/components/ui/IconButton";
import {
  caseStudies,
  projectImages,
  caseDetails,
  type CaseDetail,
} from "@/data/content";

export function generateStaticParams() {
  // telderi has its own dedicated page at /cases/telderi/page.tsx
  return caseStudies.filter((c) => c.slug !== "telderi").map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((c) => c.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.subtitle,
    alternates: { canonical: `/cases/${slug}` },
  };
}

const CASE_SECTIONS: { label: string; key: keyof CaseDetail }[] = [
  { label: "Задача", key: "task" },
  { label: "Роль", key: "role" },
  { label: "Процесс", key: "process" },
  { label: "Результат", key: "result" },
];

/** Structured case study description. Shows real content or a dashed placeholder. */
function CaseDescription({ slug }: { slug: string }) {
  const detail = caseDetails[slug];

  if (detail) {
    return (
      <dl className="mt-8 grid gap-3 sm:grid-cols-2">
        {CASE_SECTIONS.map(({ label, key }) => (
          <div key={key} className="border-line bg-subtle rounded-[12px] border p-4">
            <dt className="text-muted text-[12px] font-medium uppercase tracking-[0.06em]">
              {label}
            </dt>
            <dd className="text-ink mt-2 text-[15px] leading-[1.6]">{detail[key]}</dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <div className="border-line bg-subtle mt-8 rounded-[16px] border border-dashed p-6">
      <p className="text-muted text-[14px] leading-[1.5]">
        Текст кейса (задача, роль, процесс, результат) будет добавлен из Figma.
      </p>
    </div>
  );
}

/** Screens gallery — layout per project. */
function CaseGallery({ slug, images }: { slug: string; images: string[] }) {
  if (slug === "telderi") {
    // Row 1: tall portrait left, two landscape right
    // Row 2: wide finance/profile screen spanning full width
    return (
      <div className="mt-8 flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1.2fr]">
          <div className="border-line sm:row-span-2 overflow-hidden rounded-[16px] border bg-white">
            <Image
              src={images[0]}
              alt="Telderi — страница лота"
              width={760}
              height={1020}
              sizes="(max-width: 640px) 100vw, 400px"
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="border-line overflow-hidden rounded-[16px] border bg-white">
            <Image
              src={images[1]}
              alt="Telderi — чат поддержки"
              width={760}
              height={456}
              sizes="(max-width: 640px) 100vw, 460px"
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="border-line overflow-hidden rounded-[16px] border bg-white">
            <Image
              src={images[2]}
              alt="Telderi — профиль продавца"
              width={760}
              height={532}
              sizes="(max-width: 640px) 100vw, 460px"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
        {images[3] && (
          <div className="border-line overflow-hidden rounded-[16px] border bg-white">
            <Image
              src={images[3]}
              alt="Telderi — финансы и промокоды"
              width={1400}
              height={880}
              sizes="(max-width: 920px) 100vw, 800px"
              className="h-auto w-full object-contain"
            />
          </div>
        )}
      </div>
    );
  }

  if (slug === "fleep-bot") {
    const phones = images.slice(0, 3);
    const extra = images[3];
    const alts = [
      "Fleep.bot — мои приложения",
      "Fleep.bot — настройки приложения",
      "Fleep.bot — настройки темы",
    ];
    return (
      <div className="mt-8 flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {phones.map((src, i) => (
            <div
              key={src}
              className="border-line overflow-hidden rounded-[24px] border bg-white shadow-sm"
            >
              <Image
                src={src}
                alt={alts[i] ?? `Fleep.bot — экран ${i + 1}`}
                width={477}
                height={984}
                sizes="(max-width: 640px) 100vw, 260px"
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
        {extra && (
          <div className="border-line overflow-hidden rounded-[24px] border bg-white shadow-sm">
            <Image
              src={extra}
              alt="Fleep.bot — аналитика"
              width={390}
              height={798}
              sizes="(max-width: 640px) 100vw, 260px"
              className="mx-auto h-auto w-full max-w-[390px] object-contain"
            />
          </div>
        )}
      </div>
    );
  }

  // Default: stacked screenshots (EventPanel)
  const alts: Record<string, string[]> = {
    "event-panel": ["EventPanel — список событий", "EventPanel — монетизация"],
  };
  return (
    <div className="mt-8 flex flex-col gap-4">
      {images.map((src, i) => (
        <div key={src} className="border-line overflow-hidden rounded-[16px] border bg-white">
          <Image
            src={src}
            alt={alts[slug]?.[i] ?? `${slug} — экран ${i + 1}`}
            width={1400}
            height={880}
            sizes="(max-width: 920px) 100vw, 800px"
            className="h-auto w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = caseStudies.find((c) => c.slug === slug);
  if (!project) notFound();

  const images = projectImages[slug] ?? [];

  return (
    <>
      <Header />
      <main className="container-content py-8 md:py-12">
        <div className="mx-auto flex max-w-[880px] items-center gap-3">
          <IconButton href="/" label="Назад на главную">
            <ChevronLeft />
          </IconButton>
          <span className="text-muted text-[14px]">Назад к проектам</span>
        </div>

        <Card as="article" className="mx-auto mt-6 max-w-[880px] p-6 md:p-10">
          <h1 className="text-ink text-[28px] leading-[1.2] font-medium tracking-[-0.02em] md:text-[36px]">
            {project.title}
          </h1>
          <p className="text-muted mt-3 text-[18px] leading-[1.4]">{project.subtitle}</p>

          <CaseDescription slug={slug} />
          <CaseGallery slug={slug} images={images} />
        </Card>
      </main>

      <footer className="container-content border-line text-muted border-t py-8 text-center text-[14px]">
        © {new Date().getFullYear()} Алина Соболь
      </footer>
    </>
  );
}
