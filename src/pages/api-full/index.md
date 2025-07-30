---
layout: none
---

<RedoclyAPIBlock 
    hideLoading={false}
    src="/redocly-test/openapi/openapi.yaml" 
    requestInterceptor="
        function(req, operation) { 
            console.log('Args:', req, operation); 
            return req; 
        }
    " 
/>