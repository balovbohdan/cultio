import * as React from 'react';
import {Query} from 'react-apollo';
import {QueryResult} from 'react-apollo';

type Props = {
    query:string;
    children:(res:QueryResult)=>React.ReactNode;
};

export const GqlQuery = ({query, children}:Props) =>
    // @ts-ignore
    <Query query={query}>
        {children}
    </Query>;