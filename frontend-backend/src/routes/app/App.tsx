import '@css/index.css';
import * as React from 'react';

type Props = {
    content:string;
    devMode:boolean;
    state:{[key:string]:any};
};

export const App = ({state, content, devMode}:Props) =>
    <body>
        <Content content={content}/>
        <HotReloadScript devMode={devMode}/>
        <ApolloState state={state}/>
    </body>;

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