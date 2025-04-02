# RatelimitSetOverrideResponse

## Example Usage

```typescript
import { RatelimitSetOverrideResponse } from "@unkey/api/models/operations";

let value: RatelimitSetOverrideResponse = {
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
| `v2RatelimitSetOverrideResponseBody`                                                                           | [components.V2RatelimitSetOverrideResponseBody](../../models/components/v2ratelimitsetoverrideresponsebody.md) | :heavy_minus_sign:                                                                                             | OK                                                                                                             |