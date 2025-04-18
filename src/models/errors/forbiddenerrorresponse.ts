/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type ForbiddenErrorResponseData = {
  meta: components.Meta;
  error: components.BaseError;
};

export class ForbiddenErrorResponse extends Error {
  meta: components.Meta;
  error: components.BaseError;

  /** The original data that was passed to this error instance. */
  data$: ForbiddenErrorResponseData;

  constructor(err: ForbiddenErrorResponseData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.meta = err.meta;
    this.error = err.error;

    this.name = "ForbiddenErrorResponse";
  }
}

/** @internal */
export const ForbiddenErrorResponse$inboundSchema: z.ZodType<
  ForbiddenErrorResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  meta: components.Meta$inboundSchema,
  error: components.BaseError$inboundSchema,
})
  .transform((v) => {
    return new ForbiddenErrorResponse(v);
  });

/** @internal */
export type ForbiddenErrorResponse$Outbound = {
  meta: components.Meta$Outbound;
  error: components.BaseError$Outbound;
};

/** @internal */
export const ForbiddenErrorResponse$outboundSchema: z.ZodType<
  ForbiddenErrorResponse$Outbound,
  z.ZodTypeDef,
  ForbiddenErrorResponse
> = z.instanceof(ForbiddenErrorResponse)
  .transform(v => v.data$)
  .pipe(z.object({
    meta: components.Meta$outboundSchema,
    error: components.BaseError$outboundSchema,
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ForbiddenErrorResponse$ {
  /** @deprecated use `ForbiddenErrorResponse$inboundSchema` instead. */
  export const inboundSchema = ForbiddenErrorResponse$inboundSchema;
  /** @deprecated use `ForbiddenErrorResponse$outboundSchema` instead. */
  export const outboundSchema = ForbiddenErrorResponse$outboundSchema;
  /** @deprecated use `ForbiddenErrorResponse$Outbound` instead. */
  export type Outbound = ForbiddenErrorResponse$Outbound;
}
