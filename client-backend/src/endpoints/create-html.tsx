import * as React from 'react';
import * as fetch from 'node-fetch';

import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

import {Endpoint, EndpointProps} from './types';
import {createApp} from '@components/app/server/utils';
import {validateLocation} from '@components/routes/utils/security';

const createListener = (props:EndpointProps) =>
    async (req, res) => {
        const location = getLocation(req);

        if (!location)
            return rejectIfInvalidLocation(req);

        await resolve(req, res, location, props);
    };

const resolve = async (req, res, location:string, props:EndpointProps) => {
    const data = await createRes(req, location, props);

    res.send(data).end();
};

const rejectIfInvalidLocation = res => {
    res.sendStatus(404);
};

const createRes = async (req, location:string, props:EndpointProps):Promise<string> => {
    const client = createApolloClient({ req });

    const html = await createApp({
        client,
        location,
        context: {},
        devMode: props.devMode
    });

    return JSON.stringify({ html });
};

const getLocation = req => {
    try {
        return validateLocation(req.query.location || '/');
    } catch (e) {
        return null;
    }
};

const createApolloClient = ({req}) =>
    new ApolloClient({
        ssrMode: true,
        cache: new InMemoryCache(),
        link: createHttpLink({
            fetch,
            uri: 'http://localhost:8080',
            credentials: 'http://localhost:8080',
            headers: {
                cookie: req.header('Cookie')
            }
        })
    });

export const createHtml:Endpoint = {
    method: 'get',
    createListener,
    condition: '/actions/create-html'
};