import '../../css/index.css';
import * as React from 'react';

type Props = {
    devMode:boolean;
    children:React.ReactNode;
    state:{[key:string]:any};
};

export const App = ({state, devMode,children}:Props) =>
    <body>
        <div id='app'>{children}</div>
        <HotReloadScript devMode={devMode}/>
        <ApolloState state={state}/>
    </body>;

const HotReloadScript = ({devMode}) =>
    devMode
        ? <script src='reload/reload.js'/>
        : null;

const ApolloState = ({state}) => {
    const stateSerialized = JSON.stringify(state).replace(/</g, '\\u003c');
    const __html = `window.__APOLLO_STATE__ = ${stateSerialized};`;

    return <script dangerouslySetInnerHTML={{ __html }}/>;
};