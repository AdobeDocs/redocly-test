export function requestInterceptor(req, operation) {
    console.log('Request:', req, rawOperation);
  
    // you get the operation model with raw operation info from the OAS definition
    const rawOperation = operation.operationDefinition;
  
    // you can manipulate headers, e.g. inject header based on req body
    req.headers['x-body-length'] = req.body?.length;
  
    // you can also change the req URL
    req.url = '/proxy' + req.url;
  
    return req;
  }