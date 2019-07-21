import * as React from 'react';
import {ApolloClient} from 'apollo-client';
import * as ReactDOMServer from 'react-dom/server';

import {Html} from './Html';
import {Content} from './Content';

export type Props = {
    location:string;
    devMode:boolean;
    client:ApolloClient<any>;
    context:{[key:string]:any};
};

export const App = (props:Props) => {
    const state = props.client.extract();
    const content = createContentStr(props);

    return <Html
        state={state}
        content={content}
        devMode={props.devMode}/>;
};

const createContentStr = ({context, client, location}:Props) => {
    const content = <Content
        client={client}
        context={context}
        location={location}/>;

    return ReactDOMServer.renderToString(content);
};