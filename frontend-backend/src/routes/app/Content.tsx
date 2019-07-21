import * as React from 'react';
import {StaticRouter} from 'react-router';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

type Props = {
    location:string;
    client:ApolloClient<any>;
    context:{[key:string]:any};
};

export const Content = ({client, context, location}:Props) =>
    // @ts-ignore
    <ApolloProvider client={client}>
        <StaticRouter location={location} context={context}>
            <h1>hello world!</h1>
        </StaticRouter>
    </ApolloProvider>;