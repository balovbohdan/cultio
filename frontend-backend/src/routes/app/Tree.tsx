import * as React from 'react';
import {StaticRouter} from 'react-router';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

import {RouterSwitch} from './RouterSwitch';
import {Books} from '../../components/Books';

type Props = {
    location:string;
    client:ApolloClient<any>;
    context:{[key:string]:any};
};

export const Tree = ({client, context, location}:Props) =>
    // @ts-ignore
    <ApolloProvider client={client}>
        <StaticRouter location={location} context={context}>
            <h1>hello world!</h1>
            <Books/>
            <RouterSwitch/>
        </StaticRouter>
    </ApolloProvider>;