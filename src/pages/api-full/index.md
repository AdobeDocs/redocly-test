<RedoclyAPIBlock 
    src="/redocly-test/openapi/openapi.yaml" 
    scrollYOffset={64}
    requestInterceptor="
        function(req, operation) { 
            console.log('Args:', req, operation); 
            return req; 
        }
    " 
/>