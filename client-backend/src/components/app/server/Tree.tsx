import * as React from 'react';
import {StaticRouter} from 'react-router';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {ThemeProvider} from '@material-ui/styles';

import {theme} from '@root/theme';
import {RouterSwitch} from './RouterSwitch';
import {Books} from '../../Books';
import {Header} from '@components/header/main';

type Props = {
    location:string;
    client:ApolloClient<any>;
    context:{[key:string]:any};
};

export const Tree = ({client, context, location}:Props) =>
    <ApolloProvider client={client}>
        <StaticRouter location={location} context={context}>
            <ThemeProvider theme={theme}>
                <Header/>
                <RouterSwitch/>
            </ThemeProvider>
        </StaticRouter>
    </ApolloProvider>;