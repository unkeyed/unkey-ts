/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type IdentitiesCreateIdentityResponseData = {
  /**
   * The id of the identity. Used internally, you do not need to store this.
   */
  identityId: string;
};

/** @internal */
export const IdentitiesCreateIdentityResponseData$inboundSchema: z.ZodType<
  IdentitiesCreateIdentityResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  identityId: z.string(),
});

/** @internal */
export type IdentitiesCreateIdentityResponseData$Outbound = {
  identityId: string;
};

/** @internal */
export const IdentitiesCreateIdentityResponseData$outboundSchema: z.ZodType<
  IdentitiesCreateIdentityResponseData$Outbound,
  z.ZodTypeDef,
  IdentitiesCreateIdentityResponseData
> = z.object({
  identityId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IdentitiesCreateIdentityResponseData$ {
  /** @deprecated use `IdentitiesCreateIdentityResponseData$inboundSchema` instead. */
  export const inboundSchema =
    IdentitiesCreateIdentityResponseData$inboundSchema;
  /** @deprecated use `IdentitiesCreateIdentityResponseData$outboundSchema` instead. */
  export const outboundSchema =
    IdentitiesCreateIdentityResponseData$outboundSchema;
  /** @deprecated use `IdentitiesCreateIdentityResponseData$Outbound` instead. */
  export type Outbound = IdentitiesCreateIdentityResponseData$Outbound;
}

export function identitiesCreateIdentityResponseDataToJSON(
  identitiesCreateIdentityResponseData: IdentitiesCreateIdentityResponseData,
): string {
  return JSON.stringify(
    IdentitiesCreateIdentityResponseData$outboundSchema.parse(
      identitiesCreateIdentityResponseData,
    ),
  );
}

export function identitiesCreateIdentityResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<IdentitiesCreateIdentityResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      IdentitiesCreateIdentityResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IdentitiesCreateIdentityResponseData' from JSON`,
  );
}
