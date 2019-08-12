import * as React from 'react';
import {ApolloClient} from 'apollo-client';
import {getDataFromTree} from 'react-apollo';

import {App} from '../App';
import {Tree} from '../Tree';

export type Props = {
    location:string;
    devMode:boolean;
    client:ApolloClient<any>;
    context:{[key:string]:any};
};

export const createBody = async (props:Props) => {
    const state = props.client.extract();
    const content = await createTree(props);

    return (
        <App state={state} devMode={props.devMode}>
            {content}
        </App>
    );
};

const createTree = async ({context, client, location}:Props) => {
    const tree = <Tree
        client={client}
        context={context}
        location={location}/>;

    await getDataFromTree(tree);

    return tree;
};