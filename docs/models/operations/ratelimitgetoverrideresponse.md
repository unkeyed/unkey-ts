# RatelimitGetOverrideResponse

## Example Usage

```typescript
import { RatelimitGetOverrideResponse } from "@unkey/api/models/operations";

let value: RatelimitGetOverrideResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `v2RatelimitGetOverrideResponseBody`                                                                           | [components.V2RatelimitGetOverrideResponseBody](../../models/components/v2ratelimitgetoverrideresponsebody.md) | :heavy_minus_sign:                                                                                             | OK                                                                                                             |