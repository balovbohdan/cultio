import * as React from 'react';
import {Query} from 'react-apollo';

type Props = {
    children;
    query:string;
};

export const GqlQuery = ({query, children}:Props) =>
    // @ts-ignore
    <Query query={query}>
        {children}
    </Query>;