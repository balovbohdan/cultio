import * as React from 'react';
import {getDataFromTree} from 'react-apollo';
import * as ReactDOMServer from 'react-dom/server';

import {App, Props} from '../App';

export const createHtml = async (props:Props) => {
    const app = createApp(props);

    await getDataFromTree(app);

    return createStr(app);
};

const createStr = app => {
    const appStr = ReactDOMServer.renderToStaticMarkup(app);

    return `<!doctype html>\n${appStr}`;
};

const createApp = (props:Props) =>
    <App
        client={props.client}
        devMode={props.devMode}
        context={props.context}
        location={props.location}/>;