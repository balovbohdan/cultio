import * as React from 'react';
import {StaticRouter} from 'react-router';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';

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
            <Typography component="h2">
                h1. Heading
            </Typography>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
            <Books/>
            <RouterSwitch/>
        </StaticRouter>
    </ApolloProvider>;