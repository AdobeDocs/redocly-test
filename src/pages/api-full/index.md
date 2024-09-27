---
layout: none
---

<RedoclyAPIBlock 
    src="/redocly-test/openapi/openapi.yaml" 
    requestInterceptor="
        function(req, operation) { 
            console.log('Args:', req, operation); 
            return req; 
        }
    " 
    tryItOpenEventHandler="
        function(event) { 
            console.log('args:', event); 
        }
    " 
    tryItSentEventHandler="
        function(event) { 
            console.log('args:', event); 
        }
    " 
/>