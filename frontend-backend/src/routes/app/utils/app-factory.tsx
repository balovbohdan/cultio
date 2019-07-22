import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import {createHtml, Props} from './html-factory';

export const createApp = async (props:Props) => {
    const html = await doCreateHtml(props);

    return createStr(html);
};

const createStr = app => {
    const appStr = ReactDOMServer.renderToStaticMarkup(app);

    return `<!doctype html>\n${appStr}`;
};

const doCreateHtml = ({client, context, devMode, location}:Props) =>
    createHtml({
        client,
        devMode,
        context,
        location
    });