/**
 * Massposting case study content. Validated against the CaseStudy schema at
 * build time. Private commercial project (IP Kutuzova). Facts and contribution:
 * Eldar's own work as the sole engineer.
 */
export const masspostingData = {
  slug: "massposting",
  name: "Massposting",
  kicker: "Sole engineer · 2025 to present · Contract",
  tagline: "Multi-tenant SMM automation, from mass video seeding to marketplace sales.",
  summary:
    "Massposting is a multi-tenant SMM automation platform for agencies. It schedules and cross-posts short video across roughly a thousand TikTok, Instagram and YouTube accounts, attributes every publication to the right marketplace article card (Wildberries, Ozon, Yandex.Market), collects view metrics, and turns it all into sales funnels and three-tier client reports. It even generates the videos themselves with an AI pipeline. I built it solo, end to end: architecture, NestJS backend, Next.js dashboard, infrastructure and CI/CD.",
  stats: [
    { value: "Solo", label: "engineer, end to end" },
    { value: "3", label: "marketplaces integrated" },
    { value: "~1,000", label: "social accounts managed" },
    { value: "100%", label: "typed client to server" },
  ],
  sectors: ["SMM agencies", "Marketplace sellers"],
  stack: [
    "NestJS",
    "DDD / hexagonal",
    "TypeScript",
    "Drizzle ORM",
    "PostgreSQL",
    "Redis",
    "BullMQ",
    "ts-rest",
    "Next.js",
    "React",
    "Shadcn/UI",
    "Recharts",
    "S3",
    "ffmpeg",
    "Whisper",
    "GitLab CI/CD",
  ],
  product: [
    {
      title: "Cross-posting and scheduling",
      desc: "Schedule and cross-post short video across a thousand TikTok, Instagram and YouTube accounts in one action.",
    },
    {
      title: "Marketplace attribution",
      desc: "Link every publication to the right Wildberries, Ozon or Yandex.Market article card, manually or parsed from captions.",
    },
    {
      title: "Funnels and uplift",
      desc: "Collect view metrics and turn them into sales funnels, organic-vs-promo uplift and heatmaps.",
    },
    {
      title: "Three-tier reporting",
      desc: "Role-based reports for admins, managers and clients, with Excel export.",
    },
    {
      title: "AI video generation",
      desc: "Generate the videos themselves: AI voiceover, word-timed subtitles and an ffmpeg render.",
    },
    {
      title: "Accounts at scale",
      desc: "Manage ~1,000 social accounts with proxy rotation, named groups and SmmBox publishing.",
    },
  ],
  contributions: [
    {
      theme: "Solo ownership & architecture",
      items: [
        {
          title: "Built the entire platform solo, end to end",
          detail:
            "Sole engineer on the product: architecture, NestJS backend, Next.js dashboard, infrastructure and CI/CD, all of it.",
        },
        {
          title: "Hexagonal / DDD backend across ~24 modules",
          detail:
            "Use cases over Drizzle ORM with domain entities and a repository pattern, CQRS-lite reads, and RBAC (role, project and client scopes) enforced by guards on the presentation layer.",
        },
        {
          title: "End-to-end type safety with ts-rest",
          detail:
            "Shared contracts in one package are the single source of truth for client and server, so a backend change that breaks the frontend fails at compile time, not in production.",
        },
        {
          title: "Tested and shipped on CI",
          detail:
            "Vitest integration tests against a real Postgres in Docker, Playwright E2E, and GitLab CI/CD.",
        },
      ],
    },
    {
      theme: "Marketplace analytics",
      items: [
        {
          title: "Integrated three marketplaces",
          detail:
            "Wildberries, Ozon and Yandex.Market: encrypted API credentials, nightly stats pipelines and orders ledgers on BullMQ crons.",
        },
        {
          title: "Built the attribution engine",
          detail:
            "Links each publication to a marketplace article card from three sources (manual, parsed-from-caption, and Wildberries substitute-article resolution via search.wb.ru), unified behind one SQL view.",
        },
        {
          title: "Funnels, uplift and three-tier reports",
          detail:
            "Sales funnels, organic-vs-promo uplift and heatmaps, surfaced as role-based reports (admin, manager, client) with Excel export.",
        },
      ],
    },
    {
      theme: "Async pipelines & scale",
      items: [
        {
          title: "BullMQ pipelines with an adaptive scheduler",
          detail:
            "Metric collection, caption parsing and nightly marketplace refresh run as queued workers; the metric scheduler adapts polling frequency to a publication's age.",
        },
        {
          title: "Cost-controlled scraping",
          detail:
            "The paid metrics provider bills per request including 404s, so a deleted post goes terminal after the first 404 instead of spamming paid calls; spend is tracked in Redis with low-balance alerts.",
        },
        {
          title: "Observability and resilience",
          detail:
            "Sentry and Prometheus, proxy rotation, dead-letter handling, and encrypted nightly Postgres backups to a separate bucket.",
        },
      ],
    },
    {
      theme: "AI video generation",
      items: [
        {
          title: "BullMQ render pipeline",
          detail:
            "Generates short videos end to end: ElevenLabs TTS voiceover, Whisper ASR for word-timed subtitles, and an ffmpeg render on dedicated workers with S3 presigned uploads.",
        },
        {
          title: "Sub-3s job cancellation",
          detail:
            "A render job can be cancelled mid-flight: the worker polls job status and aborts the active ffmpeg process within three seconds.",
        },
      ],
    },
  ],
  gallery: [
    { src: "/projects/massposting/crosspost.png", alt: "One-click cross-posting dialog to all socials of an account", caption: "One-click cross-posting to all socials" },
    { src: "/projects/massposting/settings.png", alt: "Application settings with AI and integration API keys", caption: "AI and integration settings" },
    { src: "/projects/massposting/users.png", alt: "User and role management with admin and manager roles", caption: "Users, roles and impersonation" },
    { src: "/projects/massposting/docs.png", alt: "Built-in markdown documentation viewer", caption: "Built-in team documentation" },
  ],
  note: "Private commercial project. Screenshots use demo data; the live product and source are available on request.",
};
