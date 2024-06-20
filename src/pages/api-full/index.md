---
layout: none
---

<RedoclyAPIBlock 
    src="/redocly-test/openapi/openapi.yaml" 
    width="600px" 
    requestInterceptor="
        function(req, operation) { 
            console.log('Args 286:', req, operation); 
            return req; 
        }
    " 
/>
