import * as React from 'react';
import *as fetch from 'node-fetch';
import {StaticRouter} from 'react-router';
import * as ReactDOMServer from 'react-dom/server';

import {ApolloClient} from 'apollo-client';
import {getDataFromTree} from 'react-apollo';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

import {Endpoint, EndpointProps} from '../types';
import {createHtml} from '@routes/app/utils';

const createListener = (props:EndpointProps) =>
    async (req, res) => {
        const client = createApolloClient({ req });

        const html = await createHtml({
            client,
            context: {},
            location: req.url,
            devMode: props.devMode
        });

        res.status(200);
        res.send(html);
        res.end();
    };

const createApolloClient = ({req}) =>
    new ApolloClient({
        ssrMode: true,
        cache: new InMemoryCache(),
        link: createHttpLink({
            fetch,
            uri: 'http://localhost:1010',
            credentials: 'http://localhost:1010',
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