import { Effect, Schema } from "effect";
import { Profile } from "./schema";
import { profileData } from "./profile";

/**
 * Decode and validate the raw content at build time.
 * `Effect.runSync` throws if the data does not match the schema, so a
 * malformed `profile.ts` breaks the build instead of the live site.
 */
export const profile: Profile = Effect.runSync(
  Schema.decodeUnknown(Profile)(profileData),
);
