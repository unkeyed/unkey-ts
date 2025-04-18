/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { livenessLiveness } from "../funcs/livenessLiveness.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Liveness extends ClientSDK {
  /**
   * Liveness check
   *
   * @remarks
   * This endpoint checks if the service is alive.
   */
  async liveness(
    options?: RequestOptions,
  ): Promise<components.V2LivenessResponseBody> {
    return unwrapAsync(livenessLiveness(
      this,
      options,
    ));
  }
}
