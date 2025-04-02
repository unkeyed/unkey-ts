/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { buildCommand } from "@stricli/core";
import { numberParser } from "@stricli/core";
import * as z from "zod";
import { consoleLoggerLevels } from "../../console-logger.js";
import { mcpScopes } from "../../scopes.js";

export const startCommand = buildCommand({
  loader: async () => {
    const { main } = await import("./impl.js");
    return main;
  },
  parameters: {
    flags: {
      transport: {
        kind: "enum",
        brief: "The transport to use for communicating with the server",
        default: "stdio",
        values: ["stdio", "sse"],
      },
      port: {
        kind: "parsed",
        brief: "The port to use when the SSE transport is enabled",
        default: "2718",
        parse: (val: string) =>
          z.coerce.number().int().gte(0).lt(65536).parse(val),
      },
      tool: {
        kind: "parsed",
        brief: "Specify tools to mount on the server",
        optional: true,
        variadic: true,
        parse: (value) => {
          return z.string().parse(value);
        },
      },
      ...(mcpScopes.length
        ? {
          scope: {
            kind: "enum",
            brief:
              "Mount tools/resources that match given scope (repeatable flag)",
            values: mcpScopes,
            variadic: true,
            optional: true,
          },
        }
        : {}),
      "root-key": {
        kind: "parsed",
        brief: "Sets the rootKey auth field for the API",
        optional: true,
        parse: (value) => {
          return z.string().parse(value);
        },
      },
      "server-url": {
        kind: "parsed",
        brief: "Overrides the default server URL used by the SDK",
        optional: true,
        parse: (value) => new URL(value).toString(),
      },
      "server-index": {
        kind: "parsed",
        brief: "Selects a predefined server used by the SDK",
        optional: true,
        parse: numberParser,
      },
      "log-level": {
        kind: "enum",
        brief: "The log level to use for the server",
        default: "info",
        values: consoleLoggerLevels,
      },
      env: {
        kind: "parsed",
        brief: "Environment variables made available to the server",
        optional: true,
        variadic: true,
        parse: (val: string) => {
          const sepIdx = val.indexOf("=");
          if (sepIdx === -1) {
            throw new Error("Invalid environment variable format");
          }

          const key = val.slice(0, sepIdx);
          const value = val.slice(sepIdx + 1);

          return [
            z.string().nonempty({
              message: "Environment variable key must be a non-empty string",
            }).parse(key),
            z.string().nonempty({
              message: "Environment variable value must be a non-empty string",
            }).parse(value),
          ] satisfies [string, string];
        },
      },
    },
  },
  docs: {
    brief: "Run the Model Context Protocol server",
  },
});
