---
layout: none
---

<RedoclyAPIBlock 
    src="/redocly-test/openapi/openapi.yaml" width="600px" 
    requestInterceptor=
        "(req, operation) => ({ 
            console.log('Args:', req, rawOperation);
            return req; 
        })"
/>
