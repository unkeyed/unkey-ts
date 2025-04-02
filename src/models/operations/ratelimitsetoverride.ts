/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RatelimitSetOverrideResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  v2RatelimitSetOverrideResponseBody?:
    | components.V2RatelimitSetOverrideResponseBody
    | undefined;
};

/** @internal */
export const RatelimitSetOverrideResponse$inboundSchema: z.ZodType<
  RatelimitSetOverrideResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  V2RatelimitSetOverrideResponseBody: components
    .V2RatelimitSetOverrideResponseBody$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "V2RatelimitSetOverrideResponseBody": "v2RatelimitSetOverrideResponseBody",
  });
});

/** @internal */
export type RatelimitSetOverrideResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  V2RatelimitSetOverrideResponseBody?:
    | components.V2RatelimitSetOverrideResponseBody$Outbound
    | undefined;
};

/** @internal */
export const RatelimitSetOverrideResponse$outboundSchema: z.ZodType<
  RatelimitSetOverrideResponse$Outbound,
  z.ZodTypeDef,
  RatelimitSetOverrideResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  v2RatelimitSetOverrideResponseBody: components
    .V2RatelimitSetOverrideResponseBody$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    v2RatelimitSetOverrideResponseBody: "V2RatelimitSetOverrideResponseBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RatelimitSetOverrideResponse$ {
  /** @deprecated use `RatelimitSetOverrideResponse$inboundSchema` instead. */
  export const inboundSchema = RatelimitSetOverrideResponse$inboundSchema;
  /** @deprecated use `RatelimitSetOverrideResponse$outboundSchema` instead. */
  export const outboundSchema = RatelimitSetOverrideResponse$outboundSchema;
  /** @deprecated use `RatelimitSetOverrideResponse$Outbound` instead. */
  export type Outbound = RatelimitSetOverrideResponse$Outbound;
}

export function ratelimitSetOverrideResponseToJSON(
  ratelimitSetOverrideResponse: RatelimitSetOverrideResponse,
): string {
  return JSON.stringify(
    RatelimitSetOverrideResponse$outboundSchema.parse(
      ratelimitSetOverrideResponse,
    ),
  );
}

export function ratelimitSetOverrideResponseFromJSON(
  jsonString: string,
): SafeParseResult<RatelimitSetOverrideResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RatelimitSetOverrideResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RatelimitSetOverrideResponse' from JSON`,
  );
}
