---
layout: none
---

<RedoclyAPIBlock src="/redocly-test/openapi/openapi.yaml" width="600px" requestInterceptor = "(req, operation) => ({ console.log('~~hello'); return req; })" />
