---
layout: none
---

<RedoclyAPIBlock  src="/redocly-test/openapi/openapi.yaml" requestInterceptor="(req, operation) => ({ console.log('Args:', req, rawOperation); return req; })" />
