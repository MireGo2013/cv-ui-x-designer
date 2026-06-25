import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-content flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-ink text-[64px] leading-none font-medium tracking-[-0.02em] md:text-[96px]">
        404
      </p>
      <h1 className="text-ink mt-4 text-[20px] font-medium md:text-[24px]">Страница не найдена</h1>
      <p className="text-muted mt-2 text-[16px]">Возможно, ссылка устарела или была изменена.</p>
      <Link
        href="/"
        className="border-line bg-subtle text-ink hover:border-accent hover:bg-accent active:border-accent-pressed active:bg-accent-pressed mt-8 inline-flex items-center justify-center rounded-full border px-4 py-1.5 text-[16px] font-medium transition-colors hover:text-white"
      >
        На главную
      </Link>
    </main>
  );
}
