/**
 * TKM case study content. Validated against the CaseStudy schema at build time.
 *
 * Private commercial project under NDA. Eldar was the sole engineer. The copy
 * here is deliberately abstract: it describes the distributed architecture and
 * the engineering, NOT any real accounts, customer data, proxy provider or
 * credentials. No screenshots are shown for the same reason; the case page
 * renders a hand-built architecture diagram instead of a gallery. Numbers are
 * non-sensitive and match the resume (~2,500 orchestrated sessions, solo, etc.).
 */
export const tkmData = {
  slug: "tkm",
  name: "TKM",
  kicker: "Sole engineer · Contract",
  tagline: "A distributed browser-automation platform orchestrating ~2,500 sessions.",
  summary:
    "TKM is a distributed marketplace-automation platform that orchestrates around 2,500 managed accounts across three coordinated apps I built solo: a NestJS API that does the orchestration, a React web console for operators, and an Electron desktop application that drives a real anti-detect browser on each operator's machine. The three are tied together by one OpenAPI-typed contract, so a backend change that breaks a client fails at compile time. The hard engineering lives in the parts that have to survive at scale: per-account browser fingerprinting, sticky residential-proxy rotation with GeoIP, session warm-up and scheduling, and resilient status-sync pipelines on BullMQ.",
  stats: [
    { value: "~2,500", label: "sessions orchestrated" },
    { value: "Solo", label: "engineer, 3 apps" },
    { value: "100%", label: "typed client to server" },
    { value: "20+", label: "domain modules" },
  ],
  sectors: ["Marketplace operations", "E-commerce automation"],
  stack: [
    "NestJS",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "BullMQ",
    "Redis",
    "Socket.IO",
    "OpenAPI",
    "openapi-fetch",
    "React 18",
    "Vite",
    "MUI",
    "TanStack Table",
    "Electron",
    "Patchright",
    "MaxMind GeoIP",
    "Prometheus",
    "Winston",
    "Docker",
    "GitLab CI/CD",
  ],
  product: [
    {
      title: "Orchestration at scale",
      desc: "Manage ~2,500 marketplace accounts, each with its own identity, proxy and schedule, from one console.",
    },
    {
      title: "Anti-detect desktop application",
      desc: "An Electron app drives a real Chrome per account with a deterministic, rotating browser fingerprint.",
    },
    {
      title: "Real, resilient sessions",
      desc: "Sticky residential and mobile proxies, GeoIP region pinning, and one unique IP per account, tracked over time.",
    },
    {
      title: "Scheduling and warm-up",
      desc: "Session warm-up windows and a scheduler that paces work across accounts to stay under rate limits.",
    },
    {
      title: "Status-sync pipelines",
      desc: "Background BullMQ workers reconcile order and review state into a single normalized data model.",
    },
    {
      title: "Operator console",
      desc: "A React dashboard with thousand-row tables, filters and live status pushed over Socket.IO.",
    },
  ],
  contributions: [
    {
      theme: "Solo ownership & architecture",
      items: [
        {
          title: "Built three coordinated apps solo",
          detail:
            "Sole engineer on the whole platform: the NestJS orchestration API, the React web console and the Electron desktop application, plus the infrastructure and CI/CD under all of it.",
        },
        {
          title: "One OpenAPI-typed contract across web and desktop",
          detail:
            "The API publishes an OpenAPI contract consumed by both clients through openapi-fetch, so the wire is fully typed end to end. A backend change that breaks a client surfaces at compile time, not in production.",
        },
        {
          title: "20+ domain modules on Prisma and PostgreSQL",
          detail:
            "A clean NestJS module structure (accounts, proxies, orders, reviews, couriers, wallets, reports and more) over Prisma and PostgreSQL, with BullMQ and Redis for everything asynchronous.",
        },
        {
          title: "Tested and shipped on CI",
          detail:
            "Vitest integration tests against a real Postgres in Docker, with GitLab CI/CD and a Docker-based deploy.",
        },
      ],
    },
    {
      theme: "Anti-detect & resilience at scale",
      items: [
        {
          title: "Per-account browser fingerprinting",
          detail:
            "Each account gets a deterministic, seeded browser fingerprint applied over CDP, with a realistic browser-version distribution and a five-day rotation plus a cooling-off window, so identities stay stable but never frozen.",
        },
        {
          title: "Sticky proxy rotation with GeoIP",
          detail:
            "Residential and mobile proxies resolved as sticky sessions and region-pinned with MaxMind GeoIP, enforcing one unique IP per account and tracking IP history so two accounts never share an address.",
        },
        {
          title: "Warm-up, logout detection and re-auth",
          detail:
            "A narrow warm-up window prioritizes active accounts, and the desktop application detects logouts and re-authenticates before doing real work, instead of failing mid-task.",
        },
        {
          title: "~2,500 concurrent sessions under control",
          detail:
            "Bounded concurrency, retries and rate-limit control keep roughly 2,500 sessions running without tripping the anti-bot defenses they operate against.",
        },
      ],
    },
    {
      theme: "Orchestration & data pipelines",
      items: [
        {
          title: "BullMQ workers and an adaptive scheduler",
          detail:
            "Status sync runs as scheduled BullMQ jobs that process the fleet in capped batches on a cron, so load stays smooth instead of spiking.",
        },
        {
          title: "CDP interception into a normalized model",
          detail:
            "The desktop application intercepts marketplace calls over CDP and streams hints to the API, which normalizes them into a clean order, position and pickup-point model.",
        },
        {
          title: "FIFO orphan-attach reconciliation",
          detail:
            "A FIFO matching algorithm reconciles later events back to the right order using the most reliable real-world signal, keeping the data consistent even when events arrive out of order.",
        },
        {
          title: "Statistical pass-rate analysis",
          detail:
            "Operation success is scored with Wilson confidence intervals rather than raw ratios, so small samples don't produce misleading numbers.",
        },
      ],
    },
    {
      theme: "Desktop, real-time & delivery",
      items: [
        {
          title: "Electron desktop with auto-update",
          detail:
            "A cross-platform Electron app with auto-update and CI-built, signed Windows releases published to S3, sharing its React codebase with the web console.",
        },
        {
          title: "Real-time over Socket.IO",
          detail:
            "Account and job status is pushed live to both clients over Socket.IO, so operators see state change without refreshing.",
        },
        {
          title: "Observability and operational tooling",
          detail:
            "Prometheus metrics and rotating Winston logs for visibility, plus a Telegram bot for operational broadcasts and excel and PDF report generation.",
        },
      ],
    },
  ],
  gallery: [],
  note: "Private commercial project under NDA. No real accounts, customer data, credentials or screenshots are shown; the system is described in the abstract and visualized as architecture only. A deeper walkthrough is available on request.",
};
