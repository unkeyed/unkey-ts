/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LivenessResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  /**
   * OK
   */
  v2LivenessResponseBody?: components.V2LivenessResponseBody | undefined;
};

/** @internal */
export const LivenessResponse$inboundSchema: z.ZodType<
  LivenessResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V2LivenessResponseBody: components.V2LivenessResponseBody$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V2LivenessResponseBody": "v2LivenessResponseBody",
  });
});

/** @internal */
export type LivenessResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V2LivenessResponseBody?:
    | components.V2LivenessResponseBody$Outbound
    | undefined;
};

/** @internal */
export const LivenessResponse$outboundSchema: z.ZodType<
  LivenessResponse$Outbound,
  z.ZodTypeDef,
  LivenessResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v2LivenessResponseBody: components.V2LivenessResponseBody$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v2LivenessResponseBody: "V2LivenessResponseBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LivenessResponse$ {
  /** @deprecated use `LivenessResponse$inboundSchema` instead. */
  export const inboundSchema = LivenessResponse$inboundSchema;
  /** @deprecated use `LivenessResponse$outboundSchema` instead. */
  export const outboundSchema = LivenessResponse$outboundSchema;
  /** @deprecated use `LivenessResponse$Outbound` instead. */
  export type Outbound = LivenessResponse$Outbound;
}

export function livenessResponseToJSON(
  livenessResponse: LivenessResponse,
): string {
  return JSON.stringify(
    LivenessResponse$outboundSchema.parse(livenessResponse),
  );
}

export function livenessResponseFromJSON(
  jsonString: string,
): SafeParseResult<LivenessResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LivenessResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LivenessResponse' from JSON`,
  );
}
