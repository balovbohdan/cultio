import * as React from 'react';
import *as fetch from 'node-fetch';
import {StaticRouter} from 'react-router';

import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

import {Endpoint, EndpointProps} from '../types';
import {createApp} from '@routes/app/utils';

const createListener = (props:EndpointProps) =>
    async (req, res) => {
        const client = createApolloClient({ req });

        const app = await createApp({
            client,
            context: {},
            location: req.url,
            devMode: props.devMode
        });

        res.status(200);
        res.send(app);
        res.end();
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

export const root:Endpoint = {
    method: 'use',
    createListener,
    condition: /^\/(?!reload).*/
};