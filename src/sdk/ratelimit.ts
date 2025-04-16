/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ratelimitRatelimitDeleteOverride } from "../funcs/ratelimitRatelimitDeleteOverride.js";
import { ratelimitRatelimitGetOverride } from "../funcs/ratelimitRatelimitGetOverride.js";
import { ratelimitRatelimitListOverrides } from "../funcs/ratelimitRatelimitListOverrides.js";
import { ratelimitRatelimitSetOverride } from "../funcs/ratelimitRatelimitSetOverride.js";
import { ratelimitV1RatelimitLimit } from "../funcs/ratelimitV1RatelimitLimit.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Ratelimit extends ClientSDK {
  /**
   * TODO
   */
  async v1RatelimitLimit(
    request: components.V2RatelimitLimitRequestBody,
    options?: RequestOptions,
  ): Promise<components.V2RatelimitLimitResponseBody> {
    return unwrapAsync(ratelimitV1RatelimitLimit(
      this,
      request,
      options,
    ));
  }

  async ratelimitSetOverride(
    request: components.V2RatelimitSetOverrideRequestBody,
    options?: RequestOptions,
  ): Promise<components.V2RatelimitSetOverrideResponseBody> {
    return unwrapAsync(ratelimitRatelimitSetOverride(
      this,
      request,
      options,
    ));
  }

  async ratelimitGetOverride(
    request: components.V2RatelimitGetOverrideRequestBody,
    options?: RequestOptions,
  ): Promise<components.V2RatelimitGetOverrideResponseBody> {
    return unwrapAsync(ratelimitRatelimitGetOverride(
      this,
      request,
      options,
    ));
  }

  async ratelimitListOverrides(
    request: components.V2RatelimitListOverridesRequestBody,
    options?: RequestOptions,
  ): Promise<components.V2RatelimitListOverridesResponseBody> {
    return unwrapAsync(ratelimitRatelimitListOverrides(
      this,
      request,
      options,
    ));
  }

  async ratelimitDeleteOverride(
    request: components.V2RatelimitDeleteOverrideRequestBody,
    options?: RequestOptions,
  ): Promise<components.V2RatelimitDeleteOverrideResponseBody> {
    return unwrapAsync(ratelimitRatelimitDeleteOverride(
      this,
      request,
      options,
    ));
  }
}
