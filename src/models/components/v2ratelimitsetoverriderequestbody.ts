/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Sets a new or overwrites an existing override.
 */
export type V2RatelimitSetOverrideRequestBody = {
  /**
   * The id of the namespace. Either namespaceId or namespaceName must be provided
   */
  namespaceId?: string | undefined;
  /**
   * The name of the namespace. Either namespaceId or namespaceName must be provided
   */
  namespaceName?: string | undefined;
  /**
   * The duration in milliseconds for the rate limit window.
   */
  duration: number;
  /**
   * Identifier of your user, this can be their userId, an email, an ip or anything else. Wildcards ( * ) can be used to match multiple identifiers, More info can be found at https://www.unkey.com/docs/ratelimiting/overrides#wildcard-rules
   */
  identifier: string;
  /**
   * The maximum number of requests allowed.
   */
  limit: number;
};

/** @internal */
export const V2RatelimitSetOverrideRequestBody$inboundSchema: z.ZodType<
  V2RatelimitSetOverrideRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  namespaceId: z.string().optional(),
  namespaceName: z.string().optional(),
  duration: z.number().int(),
  identifier: z.string(),
  limit: z.number().int(),
});

/** @internal */
export type V2RatelimitSetOverrideRequestBody$Outbound = {
  namespaceId?: string | undefined;
  namespaceName?: string | undefined;
  duration: number;
  identifier: string;
  limit: number;
};

/** @internal */
export const V2RatelimitSetOverrideRequestBody$outboundSchema: z.ZodType<
  V2RatelimitSetOverrideRequestBody$Outbound,
  z.ZodTypeDef,
  V2RatelimitSetOverrideRequestBody
> = z.object({
  namespaceId: z.string().optional(),
  namespaceName: z.string().optional(),
  duration: z.number().int(),
  identifier: z.string(),
  limit: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2RatelimitSetOverrideRequestBody$ {
  /** @deprecated use `V2RatelimitSetOverrideRequestBody$inboundSchema` instead. */
  export const inboundSchema = V2RatelimitSetOverrideRequestBody$inboundSchema;
  /** @deprecated use `V2RatelimitSetOverrideRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    V2RatelimitSetOverrideRequestBody$outboundSchema;
  /** @deprecated use `V2RatelimitSetOverrideRequestBody$Outbound` instead. */
  export type Outbound = V2RatelimitSetOverrideRequestBody$Outbound;
}

export function v2RatelimitSetOverrideRequestBodyToJSON(
  v2RatelimitSetOverrideRequestBody: V2RatelimitSetOverrideRequestBody,
): string {
  return JSON.stringify(
    V2RatelimitSetOverrideRequestBody$outboundSchema.parse(
      v2RatelimitSetOverrideRequestBody,
    ),
  );
}

export function v2RatelimitSetOverrideRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<V2RatelimitSetOverrideRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2RatelimitSetOverrideRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2RatelimitSetOverrideRequestBody' from JSON`,
  );
}
