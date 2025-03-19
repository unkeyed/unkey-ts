# LivenessResponse

## Example Usage

```typescript
import { LivenessResponse } from "@unkey/api/models/operations";

let value: LivenessResponse = {
  contentType: "<value>",
  statusCode: 504,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v2LivenessResponseBody: {
    message: "OK",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `contentType`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | HTTP response content type for this operation                                          |
| `statusCode`                                                                           | *number*                                                                               | :heavy_check_mark:                                                                     | HTTP response status code for this operation                                           |
| `rawResponse`                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                  | :heavy_check_mark:                                                                     | Raw HTTP response; suitable for custom response parsing                                |
| `v2LivenessResponseBody`                                                               | [components.V2LivenessResponseBody](../../models/components/v2livenessresponsebody.md) | :heavy_minus_sign:                                                                     | OK                                                                                     |