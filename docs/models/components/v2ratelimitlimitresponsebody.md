# V2RatelimitLimitResponseBody

## Example Usage

```typescript
import { V2RatelimitLimitResponseBody } from "@unkey/api/models/components";

let value: V2RatelimitLimitResponseBody = {
  limit: 548814,
  remaining: 715190,
  reset: 602763,
  success: false,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `limit`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | The maximum number of requests allowed.                                          |
| `remaining`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | The number of requests remaining in the current window.                          |
| `reset`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | The time in milliseconds when the rate limit will reset.                         |
| `success`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | Whether the request passed the ratelimit. If false, the request must be blocked. |
| `overrideId`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | The override that was used. May be empty                                         |