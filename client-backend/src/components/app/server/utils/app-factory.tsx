import * as React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {ServerStyleSheets} from '@material-ui/styles';
import {collectContext, collectInitial} from 'node-style-loader/collect';

import {createBody, Props} from './body-factory';

type HtmlFactoryProps = {
    body:string;
    muiStyle:string;
    initialStyle:string;
    contextStyle:string;
};

export const createApp = async (props:Props):Promise<string> => {
    const body = await doCreateBody(props);

    return createStr(body);
};

const createStr = (body:React.ReactNode):string => {
    const initialStyle = collectInitial();
    const sheets = new ServerStyleSheets();
    const bodyStr = renderToStaticMarkup(sheets.collect(body));
    const muiStyle = sheets.toString();
    const [contextStyle] = collectContext(() => bodyStr);

    return createHtml({
        muiStyle,
        initialStyle,
        contextStyle,
        body: bodyStr
    });
};

const createHtml = ({body, muiStyle, initialStyle, contextStyle}:HtmlFactoryProps):string =>
    `
        <style id='mui-ssr-style' rel='stylesheet'>
            ${muiStyle}
        </style>
        ${initialStyle}
        ${contextStyle}
        ${body}
    `;

const doCreateBody = ({client, context, devMode, location}:Props):Promise<React.ReactNode> =>
    createBody({
        client,
        devMode,
        context,
        location
    });