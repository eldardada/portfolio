import { Effect, Schema } from "effect";
import { Profile, CaseStudy } from "./schema";
import { profileData } from "./profile";
import { valtData } from "./valt";
import { masspostingData } from "./massposting";
import { umnogorData } from "./umnogor";
import { tkmData } from "./tkm";
import { lizaData } from "./liza";

/**
 * Decode and validate the raw content at build time. `Effect.runSync` throws if
 * the data does not match the schema, so malformed content breaks the build
 * instead of the live site.
 */
export const profile: Profile = Effect.runSync(
  Schema.decodeUnknown(Profile)(profileData),
);

export const valt: CaseStudy = Effect.runSync(
  Schema.decodeUnknown(CaseStudy)(valtData),
);

export const massposting: CaseStudy = Effect.runSync(
  Schema.decodeUnknown(CaseStudy)(masspostingData),
);

export const umnogor: CaseStudy = Effect.runSync(
  Schema.decodeUnknown(CaseStudy)(umnogorData),
);

export const tkm: CaseStudy = Effect.runSync(
  Schema.decodeUnknown(CaseStudy)(tkmData),
);

export const liza: CaseStudy = Effect.runSync(
  Schema.decodeUnknown(CaseStudy)(lizaData),
);
