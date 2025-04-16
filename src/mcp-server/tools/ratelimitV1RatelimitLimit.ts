/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ratelimitV1RatelimitLimit } from "../../funcs/ratelimitV1RatelimitLimit.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.V2RatelimitLimitRequestBody$inboundSchema,
};

export const tool$ratelimitV1RatelimitLimit: ToolDefinition<typeof args> = {
  name: "ratelimit-v1-ratelimit-limit",
  description: `TODO`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await ratelimitV1RatelimitLimit(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
