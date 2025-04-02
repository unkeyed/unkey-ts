# V1RatelimitLimitResponse

## Example Usage

```typescript
import { V1RatelimitLimitResponse } from "@unkey/api/models/operations";

let value: V1RatelimitLimitResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `v2RatelimitLimitResponseBody`                                                                     | [components.V2RatelimitLimitResponseBody](../../models/components/v2ratelimitlimitresponsebody.md) | :heavy_minus_sign:                                                                                 | OK                                                                                                 |