import { Schema } from "effect";

/**
 * Content schema for the portfolio.
 *
 * The site content lives as plain data (see `profile.ts`) and is decoded
 * through these schemas at build time. Following Effect's "parse, don't
 * validate" principle: if the data ever drifts from the expected shape,
 * the build fails loudly instead of shipping a broken page.
 */

export const Contact = Schema.Struct({
  label: Schema.NonEmptyString,
  href: Schema.NonEmptyString,
});

export const Profile = Schema.Struct({
  name: Schema.NonEmptyString,
  role: Schema.NonEmptyString,
  yearsExperience: Schema.Number,
  tagline: Schema.NonEmptyString,
  stack: Schema.Array(Schema.NonEmptyString),
  availability: Schema.NonEmptyString,
  contacts: Schema.Array(Contact),
});

export type Profile = Schema.Schema.Type<typeof Profile>;
export type Contact = Schema.Schema.Type<typeof Contact>;
