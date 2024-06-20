---
layout: none
---

<RedoclyAPIBlock 
    src="/redocly-test/openapi/openapi.yaml" 
    width="600px" 
    requestInterceptor="function(req, operation){ console.log('Args:', req, operation); return req; }" 
/>
