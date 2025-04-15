/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Meta = {
  /**
   * A unique id for this request. Please always provide this to support.
   */
  requestId: string;
};

/** @internal */
export const Meta$inboundSchema: z.ZodType<Meta, z.ZodTypeDef, unknown> = z
  .object({
    requestId: z.string(),
  });

/** @internal */
export type Meta$Outbound = {
  requestId: string;
};

/** @internal */
export const Meta$outboundSchema: z.ZodType<Meta$Outbound, z.ZodTypeDef, Meta> =
  z.object({
    requestId: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Meta$ {
  /** @deprecated use `Meta$inboundSchema` instead. */
  export const inboundSchema = Meta$inboundSchema;
  /** @deprecated use `Meta$outboundSchema` instead. */
  export const outboundSchema = Meta$outboundSchema;
  /** @deprecated use `Meta$Outbound` instead. */
  export type Outbound = Meta$Outbound;
}

export function metaToJSON(meta: Meta): string {
  return JSON.stringify(Meta$outboundSchema.parse(meta));
}

export function metaFromJSON(
  jsonString: string,
): SafeParseResult<Meta, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Meta$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Meta' from JSON`,
  );
}
