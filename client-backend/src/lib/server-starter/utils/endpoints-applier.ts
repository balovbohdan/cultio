import * as endpoints from '@endpoints';
import {Endpoint, EndpointProps} from '@endpoints/types';

export const applyEndpoints = (app, props:EndpointProps) => {
    for (let i in endpoints)
        if (endpoints.hasOwnProperty(i))
            applyEndpoint(app, props, endpoints[i]);

    return app;
};

const applyEndpoint = (app, props:EndpointProps, endpoint:Endpoint) => {
    const {method, condition, createListener} = endpoint;
    const listener = createListener(props);

    app[method](condition, listener);
};