import gql from 'graphql-tag';
import * as React from 'react';

import {GqlQuery} from '@components/gql-query';

const query = gql`
    {
        books {
            title
        }
    }
`;

export const Books = () =>
    <GqlQuery query={query}>
        {({loading, error, data}) => {
            if (loading)
                return 'Loading...';

            if (error)
                return `Error: ${error.message}`;

            return data.books.map(i => <div>{i.title}</div>);
        }}
    </GqlQuery>;