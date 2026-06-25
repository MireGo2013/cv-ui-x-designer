# Алина Соболь — Portfolio

Портфолио Product Designer. Реализация главной страницы по макету Figma:
Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · ESLint · Prettier.

## Требования

- **Node.js ≥ 20.9** (Next.js 16). Проверить: `node -v`
- npm ≥ 10

## Установка в `D:\cv_app`

Распакуй содержимое архива так, чтобы `package.json` лежал прямо в `D:\cv_app`
(то есть `D:\cv_app\package.json`, `D:\cv_app\src\...`).

Открой терминал в этой папке:

```powershell
cd D:\cv_app
npm install
```

## Запуск

```powershell
npm run dev        # дев-сервер → http://localhost:3000
```

Прод-сборка и запуск:

```powershell
npm run build      # продакшен-сборка
npm run start      # запуск собранного приложения
```

## Проверки качества

```powershell
npm run typecheck      # tsc --noEmit
npm run lint           # eslint .
npm run format:check   # prettier --check .
npm run format         # авто-форматирование
```

## Структура

```
src/
  app/
    layout.tsx        # SEO-метаданные, шрифт Onest, lang="ru"
    page.tsx          # сборка главной из секций
    globals.css       # дизайн-токены (Tailwind v4 @theme) + базовый слой
  components/
    ui/               # Button, LinkTile, Card, Avatar, Icon, SectionHeading, ImagePlaceholder
    sections/         # Header, Hero, Projects, About, Career, Contacts
    ProjectCard.tsx   # карточка проекта (wide / stack) + PhoneMockups
  data/
    content.ts        # весь текстовый контент из Figma (с пометками [verify])
  lib/
    cn.ts             # объединение классов (clsx + tailwind-merge)
```

## Изображения и ассеты

Реальные ассеты подключены и оптимизированы:

- `public/images/avatar.webp` — аватар hero (растеризован из исходного SVG: 5.5 МБ → 25 КБ).
- `public/images/projects/*.jpg` — превью карточек (Telderi — 3 экрана коллажем, EventPanel,
  Fleep.bot, Furnish, Geonode).
- `public/images/logos/logo1…5.webp` — логотипы Карьеры/Менторства по порядку.

Все изображения отдаются через `next/image` (ленивая загрузка, форматы avif/webp, авто-`srcset`).

## Кейс-страницы и флоу

Карточки **Telderi / EventPanel / Fleep.bot** кликабельны и ведут на `/cases/<slug>`
(статическая генерация, `generateStaticParams`). На странице кейса — кнопка «Назад» (IconButton),
заголовок и подзаголовок из макета, превью-экраны и заглушки под остальные.
Неизвестные слаги отдают 404. Furnish и Geonode — карточки без отдельной страницы (как в макете).

**Текст описания кейса:** подробный текст «как в макете» пока не вставлен — он не извлечён из
Figma из-за лимита MCP (тариф Starter). На его месте — явная заглушка. Как только лимит сбросится
(или текст будет передан вручную) — подставляется в `src/app/cases/[slug]/page.tsx`.

## Точность по макету (подтверждено владельцем дизайна)

Значения сверены с Figma и заказчиком:

- **Навигация в хедере** — это контакт-кнопки: Телеграм / LinkedIn / CV / Почта / Behance
  (с иконками, внешние ссылки).
- **Контакты (CTA внизу):** Телеграм, LinkedIn, Почта, Behance — с реальными ссылками.
- **Кнопка «Карьера»:** «Скачать CV» → файл на Google Drive.
- **Цвета:** фон страницы `#FFFFFF`, карточки `#FAFAFC`, обводка `#F6F6FD`,
  текст `#2E3037` / `#6F727D`, акцент `#7893FF` (hover) / `#6E87EC` (pressed).
- **Типографика (Onest):** H1 36 / роль 18 / заголовки-карточек 28 / описание-карточек 16 px;
  мобильные размеры выставлены пропорционально по гайдлайну iOS (28 / 16 / 22 / 16).

Все ключевые токены — в `src/app/globals.css` и `src/data/content.ts`.

## Деплой (когда понадобится)

Проект — статически пререндеримая Next.js-сборка, готов к Vercel:
залить репозиторий на GitHub → в Vercel «Import Git Repository» → переменная
`NEXT_PUBLIC_SITE_URL` = домен сайта (для корректных метаданных/OG).
