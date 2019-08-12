import * as React from 'react';
import * as fetch from 'node-fetch';

import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

import {Endpoint, EndpointProps} from './types';
import {createApp} from '@components/app/server/utils';

const createListener = (props:EndpointProps) =>
    async (req, res) => {
        const data = await createRes(req, props);

        res.status(200);
        res.send(data);
        res.end();
    };

const createRes = async (req, props:EndpointProps) => {
    const client = createApolloClient({ req });

    const html = await createApp({
        client,
        context: {},
        location: req.url,
        devMode: props.devMode
    });

    return JSON.stringify({ html });
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