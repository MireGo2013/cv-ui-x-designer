import type { Metadata, Viewport } from "next";
import "@fontsource-variable/onest";
import "./globals.css";
import { siteConfig, siteUrl, personJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Алина Соболь — Product Designer",
    template: "%s · Алина Соболь",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "Алина Соболь" }],
  creator: "Алина Соболь",
  keywords: ["Product Designer", "UI/UX", "портфолио", "SaaS", "дизайн-системы", "Алина Соболь"],
  manifest: "/manifest.webmanifest",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: siteConfig.name,
    title: "Алина Соболь — Product Designer",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Алина Соболь — Product Designer",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <a
          href="#top"
          className="focus:bg-accent sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:px-4 focus:py-2 focus:text-white"
        >
          Перейти к содержимому
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
