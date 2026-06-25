import { profile, contacts } from "@/data/content";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "Алина Соболь — Product Designer",
  shortName: "А. Соболь",
  description:
    "Портфолио Алины Соболь, Product Designer с 4-летним опытом: SaaS-платформы, маркетплейсы, AI-сервисы, EdTech и внутренние бизнес-системы.",
  url: siteUrl,
  locale: "ru_RU",
  themeColor: "#ffffff",
} as const;

/** schema.org Person structured data for SEO. */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Product Designer",
  description: profile.role,
  url: siteUrl,
  knowsAbout: [
    "Product Design",
    "UI/UX Design",
    "Design Systems",
    "SaaS",
    "Marketplaces",
    "AI products",
  ],
  sameAs: contacts.links.map((l) => l.href).filter((href) => href.startsWith("http")),
};
