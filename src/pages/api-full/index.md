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
            _satellite.track('event', {
                xdm: {},
                data: {
                    web: {
                        webInteraction: {
                            name: 'custom interaction identifier/name',
                            URL: 'http://href-value-in-a-tag',
                        },
                    },
                    // any custom properties needed for digitalData
                    _adobe_corpnew: {
                        digitalData: {},
                    },
                },
            });
        }
    " 
    tryItSentEventHandler="
        function(event) { 
            console.log('args:', event); 
            _satellite.track('event', {
                xdm: {},
                data: {
                    web: {
                        webInteraction: {
                            name: 'custom interaction identifier/name',
                            URL: 'http://href-value-in-a-tag',
                        },
                    },
                    // any custom properties needed for digitalData
                    _adobe_corpnew: {
                        digitalData: {},
                    },
                },
            });
        }
    " 
/>