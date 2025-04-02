# LivenessResponse

## Example Usage

```typescript
import { LivenessResponse } from "@unkey/api/models/operations";

let value: LivenessResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v2LivenessResponseBody: {
    message: "OK",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `httpMeta`                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `v2LivenessResponseBody`                                                               | [components.V2LivenessResponseBody](../../models/components/v2livenessresponsebody.md) | :heavy_minus_sign:                                                                     | OK                                                                                     |