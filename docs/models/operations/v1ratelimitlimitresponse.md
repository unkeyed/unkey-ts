# V1RatelimitLimitResponse

## Example Usage

```typescript
import { V1RatelimitLimitResponse } from "@unkey/api/models/operations";

let value: V1RatelimitLimitResponse = {
  contentType: "<value>",
  statusCode: 306,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | HTTP response content type for this operation                                                      |
| `statusCode`                                                                                       | *number*                                                                                           | :heavy_check_mark:                                                                                 | HTTP response status code for this operation                                                       |
| `rawResponse`                                                                                      | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                              | :heavy_check_mark:                                                                                 | Raw HTTP response; suitable for custom response parsing                                            |
| `v2RatelimitLimitResponseBody`                                                                     | [components.V2RatelimitLimitResponseBody](../../models/components/v2ratelimitlimitresponsebody.md) | :heavy_minus_sign:                                                                                 | OK                                                                                                 |