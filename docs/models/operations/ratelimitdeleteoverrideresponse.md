# RatelimitDeleteOverrideResponse

## Example Usage

```typescript
import { RatelimitDeleteOverrideResponse } from "@unkey/api/models/operations";

let value: RatelimitDeleteOverrideResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `v2RatelimitDeleteOverrideResponseBody`                                                                              | [components.V2RatelimitDeleteOverrideResponseBody](../../models/components/v2ratelimitdeleteoverrideresponsebody.md) | :heavy_minus_sign:                                                                                                   | OK                                                                                                                   |