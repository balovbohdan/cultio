import * as React from 'react';
import {StaticRouter} from 'react-router';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {ThemeProvider} from '@material-ui/styles';

import {theme} from '../../theme';
import {RouterSwitch} from './RouterSwitch';
import {Books} from '../Books';

type Props = {
    location:string;
    client:ApolloClient<any>;
    context:{[key:string]:any};
};

export const Tree = ({client, context, location}:Props) =>
    <ApolloProvider client={client}>
        <StaticRouter location={location} context={context}>
            <ThemeProvider theme={theme}>
                <Typography variant='h2' component='h2'>
                    h1. Heading
                </Typography>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
                <Books/>
                <RouterSwitch/>
            </ThemeProvider>
        </StaticRouter>
    </ApolloProvider>;