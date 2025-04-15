# V2RatelimitListOverridesResponseBody

## Example Usage

```typescript
import { V2RatelimitListOverridesResponseBody } from "@unkey/api/models/components";

let value: V2RatelimitListOverridesResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: [
    {
      overrideId: "<id>",
      identifier: "<value>",
      limit: 381067,
      duration: 368224,
    },
  ],
  pagination: {
    cursor: "cursor_xyz123",
    hasMore: true,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `meta`                                                                                 | [components.Meta](../../models/components/meta.md)                                     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [components.RatelimitOverrideItem](../../models/components/ratelimitoverrideitem.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_minus_sign:                                                                     | N/A                                                                                    |