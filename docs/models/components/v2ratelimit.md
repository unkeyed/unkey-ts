# V2Ratelimit

## Example Usage

```typescript
import { V2Ratelimit } from "@unkey/api/models/components";

let value: V2Ratelimit = {
  name: "<value>",
  limit: 590340,
  duration: 928936,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The name of this limit. You will need to use this again when verifying a key.  |
| `limit`                                                                        | *number*                                                                       | :heavy_check_mark:                                                             | How many requests may pass within a given window before requests are rejected. |
| `duration`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | The duration for each ratelimit window in milliseconds.                        |