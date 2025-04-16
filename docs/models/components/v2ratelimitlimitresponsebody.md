# V2RatelimitLimitResponseBody

## Example Usage

```typescript
import { V2RatelimitLimitResponseBody } from "@unkey/api/models/components";

let value: V2RatelimitLimitResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    limit: 646831,
    remaining: 625436,
    reset: 912456,
    success: false,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `meta`                                                                                         | [components.Meta](../../models/components/meta.md)                                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [components.RatelimitLimitResponseData](../../models/components/ratelimitlimitresponsedata.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |