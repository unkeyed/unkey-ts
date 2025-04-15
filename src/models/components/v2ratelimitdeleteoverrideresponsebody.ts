/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Meta,
  Meta$inboundSchema,
  Meta$Outbound,
  Meta$outboundSchema,
} from "./meta.js";
import {
  RatelimitDeleteOverrideResponseData,
  RatelimitDeleteOverrideResponseData$inboundSchema,
  RatelimitDeleteOverrideResponseData$Outbound,
  RatelimitDeleteOverrideResponseData$outboundSchema,
} from "./ratelimitdeleteoverrideresponsedata.js";

export type V2RatelimitDeleteOverrideResponseBody = {
  meta: Meta;
  data: RatelimitDeleteOverrideResponseData;
};

/** @internal */
export const V2RatelimitDeleteOverrideResponseBody$inboundSchema: z.ZodType<
  V2RatelimitDeleteOverrideResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  meta: Meta$inboundSchema,
  data: RatelimitDeleteOverrideResponseData$inboundSchema,
});

/** @internal */
export type V2RatelimitDeleteOverrideResponseBody$Outbound = {
  meta: Meta$Outbound;
  data: RatelimitDeleteOverrideResponseData$Outbound;
};

/** @internal */
export const V2RatelimitDeleteOverrideResponseBody$outboundSchema: z.ZodType<
  V2RatelimitDeleteOverrideResponseBody$Outbound,
  z.ZodTypeDef,
  V2RatelimitDeleteOverrideResponseBody
> = z.object({
  meta: Meta$outboundSchema,
  data: RatelimitDeleteOverrideResponseData$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2RatelimitDeleteOverrideResponseBody$ {
  /** @deprecated use `V2RatelimitDeleteOverrideResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    V2RatelimitDeleteOverrideResponseBody$inboundSchema;
  /** @deprecated use `V2RatelimitDeleteOverrideResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    V2RatelimitDeleteOverrideResponseBody$outboundSchema;
  /** @deprecated use `V2RatelimitDeleteOverrideResponseBody$Outbound` instead. */
  export type Outbound = V2RatelimitDeleteOverrideResponseBody$Outbound;
}

export function v2RatelimitDeleteOverrideResponseBodyToJSON(
  v2RatelimitDeleteOverrideResponseBody: V2RatelimitDeleteOverrideResponseBody,
): string {
  return JSON.stringify(
    V2RatelimitDeleteOverrideResponseBody$outboundSchema.parse(
      v2RatelimitDeleteOverrideResponseBody,
    ),
  );
}

export function v2RatelimitDeleteOverrideResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<V2RatelimitDeleteOverrideResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      V2RatelimitDeleteOverrideResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2RatelimitDeleteOverrideResponseBody' from JSON`,
  );
}
