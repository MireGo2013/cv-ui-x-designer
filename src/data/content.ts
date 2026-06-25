import type { IconName } from "@/components/ui/Icon";

/**
 * Site content — transcribed from Figma + confirmed by the design owner.
 * Header nav is a row of contact buttons (not section anchors).
 */

export const profile = {
  name: "Алина Соболь",
  role: "Product Designer с 4-летним опытом в проектировании цифровых продуктов. Специализируюсь на сложных цифровых продуктах: SaaS-платформах, маркетплейсах, AI-сервисах, EdTech и внутренних бизнес-системах.",
} as const;

/** CV file (Google Drive) — used by the header CV button and the «Карьера» CTA. */
export const resumeUrl = "https://drive.google.com/file/d/1NPZdVUfaR_2So6cVkT66FJvS4Qc6GgvZ/view";

export type SocialLink = { label: string; href: string; icon: IconName };

/** Header buttons, left → right (confirmed). */
export const headerLinks: SocialLink[] = [
  { label: "Телеграм", href: "https://t.me/Alina_S17", icon: "telegram" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alina-sobol-6b29b5244/",
    icon: "linkedin",
  },
  { label: "CV", href: resumeUrl, icon: "cv" },
  { label: "Почта", href: "mailto:mironova_alina96@mail.ru", icon: "mail" },
  { label: "Behance", href: "https://www.behance.net/a5d2b15d", icon: "behance" },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  href: string | null;
};

export const projects: Project[] = [
  {
    slug: "telderi",
    title: "Telderi",
    subtitle: "Маркетплейс цифровых активов",
    href: "/cases/telderi",
  },
  {
    slug: "event-panel",
    title: "EventPanel",
    subtitle: "SaaS-платформа для управления аналитикой продукта",
    href: "/cases/event-panel",
  },
  {
    slug: "fleep-bot",
    title: "Fleep.bot",
    subtitle: "AI-ассистент для автоматизации пользовательских запросов",
    href: "/cases/fleep-bot",
  },
  {
    slug: "furnish",
    title: "Furnish",
    subtitle: "Мобильное e-commerce приложение для продажи мебели и товаров для интерьера.",
    href: null,
  },
  {
    slug: "geonode",
    title: "Geonode",
    subtitle:
      "B2B SaaS платформа для веб-скрейпинга, управления прокси-инфраструктурой и сбора данных.",
    href: null,
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  logo: string;
};

export const career: ExperienceItem[] = [
  {
    role: "UI/UX designer",
    company: "Design studio Three Legs",
    period: "2025–2026",
    logo: "/images/logos/logo1.webp",
  },
  {
    role: "Product Designer",
    company: "Modesco",
    period: "2025–2026",
    logo: "/images/logos/logo2.webp",
  },
  {
    role: "Product Designer",
    company: "Lead Provider",
    period: "2023–2025",
    logo: "/images/logos/logo3.webp",
  },
  {
    role: "Product Designer",
    company: "Event Panel",
    period: "2022–2023",
    logo: "/images/logos/logo4.webp",
  },
];

export const mentorship: ExperienceItem[] = [
  {
    role: "Преподаватель UI/UX дизайна",
    company: "Step IT Academy",
    period: "2024–2025",
    logo: "/images/logos/logo5.webp",
  },
];

export const about = {
  heading: "Обо мне",
  paragraphs: [
    "Я люблю задачи, в которых нужно не просто нарисовать экран, а разобраться, что на самом деле стоит за проблемой. Мне нравится исследовать, задавать вопросы, пробовать разные подходы и искать решения, которые делают продукт понятнее и удобнее.",
    "До того как прийти в дизайн, я преподавала фортепиано. Этот опыт научил меня терпению, вниманию к деталям и тому, что хороший результат редко появляется с первой попытки.",
    "В свободное время путешествую, слушаю музыку, ищу хороший кофе и пополняю свою коллекцию миньонов.",
  ],
} as const;

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Инструменты",
    items: ["Figma / Adobe Illustrator / Photoshop", "Notion / Jira / Trello /Slack"],
  },
  {
    title: "Design Systems",
    items: ["Дизайн-системы / Токены / UI-kit"],
  },
  {
    title: "Process",
    items: ["Agile / Scrum", "Работа с Dev / PM / Analytics"],
  },
  {
    title: "Языки",
    items: ["Русский — родной", "Английский — B1 (Intermediate)"],
  },
];

export const contacts = {
  heading: "Открыта к новым проектам и сотрудничеству",
  subheading: "Напишите — обсудим.",
  links: [
    { label: "Телеграм", href: "https://t.me/Alina_S17", icon: "telegram" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alina-sobol-6b29b5244/",
      icon: "linkedin",
    },
    { label: "Почта", href: "mailto:mironova_alina96@mail.ru", icon: "mail" },
    { label: "Behance", href: "https://www.behance.net/a5d2b15d", icon: "behance" },
  ] satisfies SocialLink[],
} as const;

/** Project preview images on the home grid (first image = card thumbnail). */
export const projectImages: Record<string, string[]> = {
  telderi: [
    "/images/projects/telderi1.webp",
    "/images/projects/telderi2.webp",
    "/images/projects/telderi3.webp",
    "/images/projects/telderi4.webp",
  ],
  "event-panel": [
    "/images/projects/event-panel.webp",
    "/images/projects/event-panel2.webp",
  ],
  "fleep-bot": [
    "/images/projects/fleep1.webp",
    "/images/projects/fleep2.webp",
    "/images/projects/fleep3.webp",
    "/images/projects/fleep4.webp",
  ],
  furnish: ["/images/projects/furnish1.webp", "/images/projects/furnish2.webp"],
  geonode: ["/images/projects/geonode.webp"],
};

/** Projects that have a dedicated case page (clickable cards). */
export const caseStudies = projects.filter((p): p is Project & { href: string } => p.href !== null);

export const isCaseSlug = (slug: string) => caseStudies.some((c) => c.slug === slug);

export type CaseDetail = {
  task: string;
  role: string;
  process: string;
  result: string;
};

// TODO: fill in texts after extracting from Figma (MCP quota was exhausted)
export const caseDetails: Record<string, CaseDetail> = {};
