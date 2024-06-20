---
layout: none
---

<RedoclyAPIBlock 
    src="/redocly-test/openapi/openapi.yaml" 
    width="600px" 
    requestInterceptor="
        function(req, operation) { 

            console.log('Args 284:', req, operation); 

            return req; 
        }
    " 
/>
