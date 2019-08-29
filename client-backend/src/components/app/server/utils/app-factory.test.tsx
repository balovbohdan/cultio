import * as React from 'react';
import * as fetch from 'node-fetch';

import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

import {createApp} from './app-factory';

describe('app/server/utils/app-factory', () => {
    const dummy = {
        context: {},
        location: '/',
        testMode: true,
        client: new ApolloClient({
            ssrMode: true,
            cache: new InMemoryCache(),
            link: createHttpLink({
                fetch,
                uri: 'https://48p1r2roz4.sse.codesandbox.io',
            })
        })
    };

    it('Should generate HTML string with "devMode" prop = true', async () => {
        const app = await createApp({
            ...dummy,
            devMode: true
        });

        expect(typeof app).toBe('string');
    });

    it('Should generate HTML string with "devMode" prop = false', async () => {
        const app = await createApp({
            ...dummy,
            devMode: false
        });

        expect(typeof app).toBe('string');
    });
});