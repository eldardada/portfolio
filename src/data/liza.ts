/**
 * Monolizovna case study content. Validated against the CaseStudy schema at
 * build time. Public client site (monolizovna.ru) — Eldar built the site and its
 * CMS solo. Screenshots: live public pages + the admin running on seeded demo
 * content (no real leads or personal data are shown).
 */
export const lizaData = {
  slug: "monolizovna",
  name: "Monolizovna",
  kicker: "Sole engineer · 2026 · Freelance",
  tagline: "A photographer's site and its own fast little CMS.",
  summary:
    "Monolizovna.ru is the portfolio of a Saint Petersburg photographer, and the custom CMS behind it. The public side is an editorial, image-heavy showcase — a works archive, client reviews kept exactly as they arrived, pricing formats and a hand-curated 'where to shoot in the city' guide — and it loads fast: server-rendered Astro with lazy Preact islands, inlined critical CSS and a tuned image pipeline. The private side is a full admin I built from scratch, where she edits works, reviews, pricing, locations and even the site's own copy, with drag-to-reorder and instant publishing. I built all of it solo, end to end, and ship it on Docker with GitLab CI.",
  stats: [
    { value: "Solo", label: "site + CMS" },
    { value: "Astro 5", label: "SSR + islands" },
    { value: "~28KB", label: "HTML, gzipped" },
    { value: "8", label: "CMS sections" },
  ],
  sectors: ["Photography", "Personal brand & portfolio"],
  stack: [
    "Astro 5",
    "SSR (node)",
    "Preact islands",
    "Tailwind v4",
    "Prisma",
    "SQLite",
    "jose (JWT auth)",
    "bcrypt",
    "sharp",
    "Zod",
    "Express",
    "grammy (Telegram)",
    "vk-io",
    "Docker",
    "GitLab CI/CD",
  ],
  product: [
    {
      title: "Editorial photo portfolio",
      desc: "A works archive with filtering and a full-screen lightbox, tuned to stay fast even though it is all photographs.",
    },
    {
      title: "Reviews kept as-is",
      desc: "Real messenger screenshots, unedited, in a carousel and a full archive — proof over polish.",
    },
    {
      title: "Pricing formats",
      desc: "Three shooting packages, each one editable from the admin without touching code.",
    },
    {
      title: "'Where to shoot' city guide",
      desc: "A curated, categorized guide to Saint Petersburg shooting locations, each with its own page.",
    },
    {
      title: "Her own CMS",
      desc: "She edits every section herself: works, reviews, FAQ, pricing, locations and the site's own marketing copy.",
    },
    {
      title: "Lead funnel with bots",
      desc: "A PDF freebie funnel wired to a Telegram bot, plus a VK integration for reaching clients.",
    },
  ],
  contributions: [
    {
      theme: "Full ownership & architecture",
      items: [
        {
          title: "Built the site and its CMS solo, end to end",
          detail:
            "Sole engineer: the public site, the admin, the data model, the deploy — all of it. Astro 5 in SSR mode with islands of Preact (compat) hydrated only where the page is actually interactive.",
        },
        {
          title: "A tiny self-hosted CMS on Prisma + SQLite",
          detail:
            "Nine Prisma models (works and photos, reviews, formats, FAQ, locations, editable site texts, leads, the admin user) back a CMS small enough to run from a single SQLite file, with no SaaS in the loop.",
        },
        {
          title: "Custom auth from scratch",
          detail:
            "A signed-JWT session in an httpOnly cookie via jose, bcrypt-hashed credentials, a rate-limited login, and a middleware guard over every /admin and /api/admin route. No auth library, no third party.",
        },
      ],
    },
    {
      theme: "Performance, tuned by hand",
      items: [
        {
          title: "~28KB of gzipped HTML with the CSS inlined",
          detail:
            "Critical CSS is inlined to kill the render-blocking request, so the whole document arrives in roughly 28KB gzipped and paints without waiting on a stylesheet round-trip.",
        },
        {
          title: "Cut the request chains Lighthouse hated",
          detail:
            "Disabled the modulepreload hints that chained Base → preload-helper → Lenis, and load the smooth-scroll library on first interaction instead, so nothing non-essential blocks the critical path.",
        },
        {
          title: "A real image pipeline",
          detail:
            "sharp generates responsive AVIF/WebP variants with blur-up placeholders, and the LCP hero image is preloaded over HTTP headers so it starts downloading before the HTML is even parsed.",
        },
        {
          title: "SSR straight to SQLite",
          detail:
            "The public site reads SQLite on every request, so an edit in the admin is live instantly with no ISR cache to bust, while lazy-hydrated islands keep the JS that ships tiny.",
        },
      ],
    },
    {
      theme: "The admin",
      items: [
        {
          title: "Eight sections, all hers to edit",
          detail:
            "Works, reviews, FAQ, pricing formats, locations, the site's own texts, leads and the account — a full dashboard, not a developer's escape hatch.",
        },
        {
          title: "Drag-to-reorder and photo upload",
          detail:
            "Reorder works and reviews by dragging (sortablejs), toggle what shows on the home page, and upload photos that are processed server-side through sharp on the way in.",
        },
        {
          title: "Even the copy is content",
          detail:
            "The marketing text on the public site is stored as editable site-text keys, so she can rewrite her own headlines without a deploy.",
        },
      ],
    },
    {
      theme: "Delivery & growth",
      items: [
        {
          title: "Dockerized with a real CI pipeline",
          detail:
            "GitLab CI runs lint → typecheck → build → image → smoke → deploy, and the prod server is Express with gzip and year-long cache headers for assets, behind Caddy.",
        },
        {
          title: "Lead-gen automation",
          detail:
            "A Telegram bot (grammy) drives the PDF-freebie funnel and notifies on new leads, with a VK integration (vk-io) on top for outreach.",
        },
      ],
    },
  ],
  gallery: [
    { src: "/projects/liza/spb.png", alt: "Curated 'where to shoot in Saint Petersburg' location guide", caption: "The 'where to shoot' city guide" },
    { src: "/projects/liza/home-formats.png", alt: "Pricing section with three shooting packages", caption: "Three pricing formats" },
    { src: "/projects/liza/works.png", alt: "Works archive page", caption: "The works archive" },
    { src: "/projects/liza/reviews.png", alt: "Client reviews shown as raw messenger screenshots", caption: "Reviews, kept exactly as they arrived" },
    { src: "/projects/liza/admin-hub.png", alt: "Admin dashboard with section counts", caption: "The admin dashboard" },
    { src: "/projects/liza/admin-works.png", alt: "Admin works manager with drag-to-reorder", caption: "Drag-to-reorder works manager" },
  ],
  link: { label: "Visit the site", href: "https://monolizovna.ru" },
  note: "Live client site. The admin screenshots run on seeded demo content — no real leads or personal data are shown.",
};
