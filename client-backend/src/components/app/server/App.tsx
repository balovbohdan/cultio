import * as React from 'react';
import '../../../css/index.css';

type Props = {
    devMode:boolean;
    children:React.ReactNode;
    state:{[key:string]:any};
};

export const App = ({state, children}:Props) =>
    <>
        <div id='app'>{children}</div>
        <ApolloState state={state}/>
    </>;

const ApolloState = ({state}) => {
    const stateSerialized = JSON.stringify(state).replace(/</g, '\\u003c');
    const __html = `window.__APOLLO_STATE__ = ${stateSerialized};`;

    return <script dangerouslySetInnerHTML={{ __html }}/>;
};