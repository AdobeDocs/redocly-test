---
layout: none
---

<RedoclyAPIBlock 
    src="/redocly-test/openapi/openapi.yaml" 
    width="600px" 
    requestInterceptor="
        function(req, operation) { 
            // comment 1
            console.log('Args 285:', req, operation); 
            // comment 2
            return req; 
        }
    " 
/>
