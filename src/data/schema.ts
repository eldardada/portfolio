import { Schema } from "effect";

/**
 * Content schema. The site content lives as plain data (see `profile.ts`,
 * `valt.ts`) and is decoded through these schemas at build time
 * ("parse, don't validate"): if the data drifts from the expected shape, the
 * build fails instead of shipping a broken page.
 */

export const Contact = Schema.Struct({
  label: Schema.NonEmptyString,
  href: Schema.NonEmptyString,
  tag: Schema.NonEmptyString,
});

export const Profile = Schema.Struct({
  name: Schema.NonEmptyString,
  role: Schema.NonEmptyString,
  yearsExperience: Schema.Number,
  tagline: Schema.NonEmptyString,
  heroStack: Schema.NonEmptyString,
  availability: Schema.NonEmptyString,
  contacts: Schema.Array(Contact),
});

export type Profile = Schema.Schema.Type<typeof Profile>;
export type Contact = Schema.Schema.Type<typeof Contact>;

/* ---- Case study ---- */

export const Stat = Schema.Struct({
  value: Schema.NonEmptyString,
  label: Schema.NonEmptyString,
});

export const Feature = Schema.Struct({
  title: Schema.NonEmptyString,
  desc: Schema.NonEmptyString,
});

export const Contribution = Schema.Struct({
  title: Schema.NonEmptyString,
  detail: Schema.NonEmptyString,
});

export const ContributionGroup = Schema.Struct({
  theme: Schema.NonEmptyString,
  items: Schema.Array(Contribution),
});

export const Shot = Schema.Struct({
  src: Schema.NonEmptyString,
  alt: Schema.NonEmptyString,
  caption: Schema.NonEmptyString,
});

export const Link = Schema.Struct({
  label: Schema.NonEmptyString,
  href: Schema.NonEmptyString,
});

export const CaseStudy = Schema.Struct({
  slug: Schema.NonEmptyString,
  name: Schema.NonEmptyString,
  kicker: Schema.NonEmptyString,
  tagline: Schema.NonEmptyString,
  summary: Schema.NonEmptyString,
  stats: Schema.Array(Stat),
  sectors: Schema.Array(Schema.NonEmptyString),
  stack: Schema.Array(Schema.NonEmptyString),
  product: Schema.Array(Feature),
  contributions: Schema.Array(ContributionGroup),
  gallery: Schema.Array(Shot),
  link: Schema.optional(Link),
  source: Schema.optional(Link),
  note: Schema.optional(Schema.NonEmptyString),
});

export type CaseStudy = Schema.Schema.Type<typeof CaseStudy>;
