import gql from 'graphql-tag';
import * as React from 'react';

import {GqlQuery} from '@components/gql-query';

import * as css from './Books.css';

const query = gql`
    {
        books {
            title
        }
    }
`;

export class Books extends React.Component {
    render() {
        return <div className={css.main}>
            <GqlQuery query={query}>
                {({loading, error, data}) => {
                    if (loading)
                        return 'Loading...';

                    if (error)
                        return `Error: ${error.message}`;

                    return data.books.map(i => <div>{i.title}</div>);
                }}
            </GqlQuery>
        </div>;
    }
}

// export const Books = withStyles(css)(C);