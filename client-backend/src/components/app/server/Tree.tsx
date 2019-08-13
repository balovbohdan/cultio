import * as React from 'react';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {ThemeProvider} from '@material-ui/styles';

import {theme} from '@root/theme';
import {Router} from './Router';

type Props = {
    location:string;
    client:ApolloClient<any>;
    context:{[key:string]:any};
};

export const Tree = ({client, context, location}:Props) =>
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <Router context={context} location={location}/>
        </ThemeProvider>
    </ApolloProvider>;