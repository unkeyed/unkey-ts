/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { UnkeyCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { createRegisterPrompt } from "./prompts.js";
import {
  createRegisterResource,
  createRegisterResourceTemplate,
} from "./resources.js";
import { MCPScope, mcpScopes } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$livenessCheck } from "./tools/livenessCheck.js";
import { tool$ratelimitDeleteOverride } from "./tools/ratelimitDeleteOverride.js";
import { tool$ratelimitGetOverride } from "./tools/ratelimitGetOverride.js";
import { tool$ratelimitLimit } from "./tools/ratelimitLimit.js";
import { tool$ratelimitSetOverride } from "./tools/ratelimitSetOverride.js";

export function createMCPServer(deps: {
  logger: ConsoleLogger;
  allowedTools?: string[] | undefined;
  scopes?: MCPScope[] | undefined;
  serverURL?: string | undefined;
  rootKey?: SDKOptions["rootKey"] | undefined;
  serverIdx?: SDKOptions["serverIdx"] | undefined;
}) {
  const server = new McpServer({
    name: "Unkey",
    version: "2.0.0-alpha.5",
  });

  const client = new UnkeyCore({
    rootKey: deps.rootKey,
    serverURL: deps.serverURL,
    serverIdx: deps.serverIdx,
  });

  const scopes = new Set(deps.scopes ?? mcpScopes);

  const allowedTools = deps.allowedTools && new Set(deps.allowedTools);
  const tool = createRegisterTool(
    deps.logger,
    server,
    client,
    scopes,
    allowedTools,
  );
  const resource = createRegisterResource(deps.logger, server, client, scopes);
  const resourceTemplate = createRegisterResourceTemplate(
    deps.logger,
    server,
    client,
    scopes,
  );
  const prompt = createRegisterPrompt(deps.logger, server, client, scopes);
  const register = { tool, resource, resourceTemplate, prompt };
  void register; // suppress unused warnings

  tool(tool$ratelimitLimit);
  tool(tool$ratelimitSetOverride);
  tool(tool$ratelimitGetOverride);
  tool(tool$ratelimitDeleteOverride);
  tool(tool$livenessCheck);

  return server;
}
