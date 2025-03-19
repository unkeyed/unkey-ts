/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { UnkeyCore } from "../core.js";
import { encodeJSON } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

export function ratelimitGetOverride(
  client: UnkeyCore,
  request: components.V2RatelimitGetOverrideRequestBody,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.RatelimitGetOverrideResponse,
    | errors.BadRequestError
    | errors.UnauthorizedError
    | errors.ForbiddenError
    | errors.NotFoundError
    | errors.InternalServerError
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: UnkeyCore,
  request: components.V2RatelimitGetOverrideRequestBody,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.RatelimitGetOverrideResponse,
      | errors.BadRequestError
      | errors.UnauthorizedError
      | errors.ForbiddenError
      | errors.NotFoundError
      | errors.InternalServerError
      | APIError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) =>
      components.V2RatelimitGetOverrideRequestBody$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload, { explode: true });

  const path = pathToFunc("/v2/ratelimit.getOverride")();

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.rootKey);
  const securityInput = secConfig == null ? {} : { rootKey: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "ratelimit.getOverride",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.rootKey,
    retryConfig: options?.retries
      || client._options.retryConfig
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 50,
          maxInterval: 1000,
          exponent: 1.5,
          maxElapsedTime: 10000,
        },
        retryConnectionErrors: true,
      }
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["5XX"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "403", "404", "4XX", "500", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result] = await M.match<
    operations.RatelimitGetOverrideResponse,
    | errors.BadRequestError
    | errors.UnauthorizedError
    | errors.ForbiddenError
    | errors.NotFoundError
    | errors.InternalServerError
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.RatelimitGetOverrideResponse$inboundSchema, {
      key: "V2RatelimitGetOverrideResponseBody",
    }),
    M.jsonErr(400, errors.BadRequestError$inboundSchema, {
      ctype: "application/problem+json",
    }),
    M.jsonErr(401, errors.UnauthorizedError$inboundSchema, {
      ctype: "application/problem+json",
    }),
    M.jsonErr(403, errors.ForbiddenError$inboundSchema, {
      ctype: "application/problem+json",
    }),
    M.jsonErr(404, errors.NotFoundError$inboundSchema, {
      ctype: "application/problem+json",
    }),
    M.jsonErr(500, errors.InternalServerError$inboundSchema, {
      ctype: "application/problem+json",
    }),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
