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
  RatelimitLimitResponseData,
  RatelimitLimitResponseData$inboundSchema,
  RatelimitLimitResponseData$Outbound,
  RatelimitLimitResponseData$outboundSchema,
} from "./ratelimitlimitresponsedata.js";

export type V2RatelimitLimitResponseBody = {
  meta: Meta;
  data: RatelimitLimitResponseData;
};

/** @internal */
export const V2RatelimitLimitResponseBody$inboundSchema: z.ZodType<
  V2RatelimitLimitResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  meta: Meta$inboundSchema,
  data: RatelimitLimitResponseData$inboundSchema,
});

/** @internal */
export type V2RatelimitLimitResponseBody$Outbound = {
  meta: Meta$Outbound;
  data: RatelimitLimitResponseData$Outbound;
};

/** @internal */
export const V2RatelimitLimitResponseBody$outboundSchema: z.ZodType<
  V2RatelimitLimitResponseBody$Outbound,
  z.ZodTypeDef,
  V2RatelimitLimitResponseBody
> = z.object({
  meta: Meta$outboundSchema,
  data: RatelimitLimitResponseData$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2RatelimitLimitResponseBody$ {
  /** @deprecated use `V2RatelimitLimitResponseBody$inboundSchema` instead. */
  export const inboundSchema = V2RatelimitLimitResponseBody$inboundSchema;
  /** @deprecated use `V2RatelimitLimitResponseBody$outboundSchema` instead. */
  export const outboundSchema = V2RatelimitLimitResponseBody$outboundSchema;
  /** @deprecated use `V2RatelimitLimitResponseBody$Outbound` instead. */
  export type Outbound = V2RatelimitLimitResponseBody$Outbound;
}

export function v2RatelimitLimitResponseBodyToJSON(
  v2RatelimitLimitResponseBody: V2RatelimitLimitResponseBody,
): string {
  return JSON.stringify(
    V2RatelimitLimitResponseBody$outboundSchema.parse(
      v2RatelimitLimitResponseBody,
    ),
  );
}

export function v2RatelimitLimitResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<V2RatelimitLimitResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2RatelimitLimitResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2RatelimitLimitResponseBody' from JSON`,
  );
}
