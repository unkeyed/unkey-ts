/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V2Ratelimit = {
  /**
   * The name of this limit. You will need to use this again when verifying a key.
   */
  name: string;
  /**
   * How many requests may pass within a given window before requests are rejected.
   */
  limit: number;
  /**
   * The duration for each ratelimit window in milliseconds.
   */
  duration: number;
};

/** @internal */
export const V2Ratelimit$inboundSchema: z.ZodType<
  V2Ratelimit,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  limit: z.number().int(),
  duration: z.number().int(),
});

/** @internal */
export type V2Ratelimit$Outbound = {
  name: string;
  limit: number;
  duration: number;
};

/** @internal */
export const V2Ratelimit$outboundSchema: z.ZodType<
  V2Ratelimit$Outbound,
  z.ZodTypeDef,
  V2Ratelimit
> = z.object({
  name: z.string(),
  limit: z.number().int(),
  duration: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2Ratelimit$ {
  /** @deprecated use `V2Ratelimit$inboundSchema` instead. */
  export const inboundSchema = V2Ratelimit$inboundSchema;
  /** @deprecated use `V2Ratelimit$outboundSchema` instead. */
  export const outboundSchema = V2Ratelimit$outboundSchema;
  /** @deprecated use `V2Ratelimit$Outbound` instead. */
  export type Outbound = V2Ratelimit$Outbound;
}

export function v2RatelimitToJSON(v2Ratelimit: V2Ratelimit): string {
  return JSON.stringify(V2Ratelimit$outboundSchema.parse(v2Ratelimit));
}

export function v2RatelimitFromJSON(
  jsonString: string,
): SafeParseResult<V2Ratelimit, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2Ratelimit$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2Ratelimit' from JSON`,
  );
}
