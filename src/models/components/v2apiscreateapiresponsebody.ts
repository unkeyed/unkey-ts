/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ApisCreateApiResponseData,
  ApisCreateApiResponseData$inboundSchema,
  ApisCreateApiResponseData$Outbound,
  ApisCreateApiResponseData$outboundSchema,
} from "./apiscreateapiresponsedata.js";
import {
  Meta,
  Meta$inboundSchema,
  Meta$Outbound,
  Meta$outboundSchema,
} from "./meta.js";

export type V2ApisCreateApiResponseBody = {
  meta: Meta;
  data: ApisCreateApiResponseData;
};

/** @internal */
export const V2ApisCreateApiResponseBody$inboundSchema: z.ZodType<
  V2ApisCreateApiResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  meta: Meta$inboundSchema,
  data: ApisCreateApiResponseData$inboundSchema,
});

/** @internal */
export type V2ApisCreateApiResponseBody$Outbound = {
  meta: Meta$Outbound;
  data: ApisCreateApiResponseData$Outbound;
};

/** @internal */
export const V2ApisCreateApiResponseBody$outboundSchema: z.ZodType<
  V2ApisCreateApiResponseBody$Outbound,
  z.ZodTypeDef,
  V2ApisCreateApiResponseBody
> = z.object({
  meta: Meta$outboundSchema,
  data: ApisCreateApiResponseData$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ApisCreateApiResponseBody$ {
  /** @deprecated use `V2ApisCreateApiResponseBody$inboundSchema` instead. */
  export const inboundSchema = V2ApisCreateApiResponseBody$inboundSchema;
  /** @deprecated use `V2ApisCreateApiResponseBody$outboundSchema` instead. */
  export const outboundSchema = V2ApisCreateApiResponseBody$outboundSchema;
  /** @deprecated use `V2ApisCreateApiResponseBody$Outbound` instead. */
  export type Outbound = V2ApisCreateApiResponseBody$Outbound;
}

export function v2ApisCreateApiResponseBodyToJSON(
  v2ApisCreateApiResponseBody: V2ApisCreateApiResponseBody,
): string {
  return JSON.stringify(
    V2ApisCreateApiResponseBody$outboundSchema.parse(
      v2ApisCreateApiResponseBody,
    ),
  );
}

export function v2ApisCreateApiResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<V2ApisCreateApiResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2ApisCreateApiResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2ApisCreateApiResponseBody' from JSON`,
  );
}
