# RatelimitOverrideItem

## Example Usage

```typescript
import { RatelimitOverrideItem } from "@unkey/api/models/components";

let value: RatelimitOverrideItem = {
  overrideId: "<id>",
  identifier: "<value>",
  limit: 678874,
  duration: 940183,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `overrideId`                                            | *string*                                                | :heavy_check_mark:                                      | The id of the override.                                 |
| `identifier`                                            | *string*                                                | :heavy_check_mark:                                      | Identifier of your user                                 |
| `limit`                                                 | *number*                                                | :heavy_check_mark:                                      | The maximum number of requests allowed.                 |
| `duration`                                              | *number*                                                | :heavy_check_mark:                                      | The duration in milliseconds for the rate limit window. |