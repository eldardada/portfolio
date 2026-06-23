# eldardada — portfolio

Personal site of Eldar Dadashov, Senior Fullstack Engineer.

Built with **Astro** (islands architecture), **Preact** for client-side
interactivity, and **Effect** for type-safe, build-time content validation
via `effect/Schema`.

## Stack

- **Astro 7** — static output, islands architecture
- **Preact** — hydrated islands (e.g. copy-to-clipboard)
- **Effect / Schema** — content is decoded and validated at build time
- **TypeScript** — strict

## How content works

Site copy lives as plain data in `src/data/profile.ts` and is decoded through
the schema in `src/data/schema.ts` at build time (`src/data/content.ts`).
If the data drifts from the schema, the build fails instead of shipping a
broken page ("parse, don't validate").

## Develop

```sh
pnpm install
pnpm dev
```

## Build

```sh
pnpm build
pnpm preview
```

## Status

Work in progress. The Hero section is live; Skills, Experience, Projects,
AI-fluency, Testimonials and Contact sections are landing next.
