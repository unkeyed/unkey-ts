/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type NotFoundErrorData = {
  /**
   * A unique id for this request. Please always provide this to support.
   */
  requestId: string;
  /**
   * A human-readable explanation specific to this occurrence of the problem.
   */
  detail: string;
  /**
   * A URI reference that identifies the specific occurrence of the problem.
   */
  instance?: string | undefined;
  /**
   * HTTP status code
   */
  status: number;
  /**
   * A short, human-readable summary of the problem type. This value should not change between occurrences of the error.
   */
  title: string;
  /**
   * A URI reference to human-readable documentation for the error.
   */
  type: string;
};

export class NotFoundError extends Error {
  /**
   * A unique id for this request. Please always provide this to support.
   */
  requestId: string;
  /**
   * A human-readable explanation specific to this occurrence of the problem.
   */
  detail: string;
  /**
   * A URI reference that identifies the specific occurrence of the problem.
   */
  instance?: string | undefined;
  /**
   * HTTP status code
   */
  status: number;
  /**
   * A short, human-readable summary of the problem type. This value should not change between occurrences of the error.
   */
  title: string;
  /**
   * A URI reference to human-readable documentation for the error.
   */
  type: string;

  /** The original data that was passed to this error instance. */
  data$: NotFoundErrorData;

  constructor(err: NotFoundErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.requestId = err.requestId;
    this.detail = err.detail;
    if (err.instance != null) this.instance = err.instance;
    this.status = err.status;
    this.title = err.title;
    this.type = err.type;

    this.name = "NotFoundError";
  }
}

/** @internal */
export const NotFoundError$inboundSchema: z.ZodType<
  NotFoundError,
  z.ZodTypeDef,
  unknown
> = z.object({
  requestId: z.string(),
  detail: z.string(),
  instance: z.string().optional(),
  status: z.number().int(),
  title: z.string(),
  type: z.string(),
})
  .transform((v) => {
    return new NotFoundError(v);
  });

/** @internal */
export type NotFoundError$Outbound = {
  requestId: string;
  detail: string;
  instance?: string | undefined;
  status: number;
  title: string;
  type: string;
};

/** @internal */
export const NotFoundError$outboundSchema: z.ZodType<
  NotFoundError$Outbound,
  z.ZodTypeDef,
  NotFoundError
> = z.instanceof(NotFoundError)
  .transform(v => v.data$)
  .pipe(z.object({
    requestId: z.string(),
    detail: z.string(),
    instance: z.string().optional(),
    status: z.number().int(),
    title: z.string(),
    type: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotFoundError$ {
  /** @deprecated use `NotFoundError$inboundSchema` instead. */
  export const inboundSchema = NotFoundError$inboundSchema;
  /** @deprecated use `NotFoundError$outboundSchema` instead. */
  export const outboundSchema = NotFoundError$outboundSchema;
  /** @deprecated use `NotFoundError$Outbound` instead. */
  export type Outbound = NotFoundError$Outbound;
}
