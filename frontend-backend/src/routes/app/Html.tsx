import * as React from 'react';

type Props = {
    content:string;
    devMode:boolean;
    state:{[key:string]:any};
};

export const Html = ({state, content, devMode}:Props) =>
    <html>
        <body>
            <Content content={content}/>
            <HotReloadScript devMode={devMode}/>
            <ApolloState state={state}/>
        </body>
    </html>;

const Content = ({content:__html}) =>
    <div id='app' dangerouslySetInnerHTML={{ __html }}/>;

const HotReloadScript = ({devMode}) =>
    devMode
        ? <script src='reload/reload.js'/>
        : null;

const ApolloState = ({state}) => {
    const stateSerialized = JSON.stringify(state).replace(/</g, '\\u003c');
    const __html = `window.__APOLLO_STATE__ = ${stateSerialized};`;

    return <script dangerouslySetInnerHTML={{ __html }}/>;
};