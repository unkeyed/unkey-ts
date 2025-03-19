<!-- Start SDK Example Usage [usage] -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey();

async function run() {
  const result = await unkey.ratelimit.limit({
    namespace: "sms.sign_up",
    duration: 455106,
    identifier: "<value>",
    limit: 568662,
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->