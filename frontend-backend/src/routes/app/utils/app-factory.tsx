import * as React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {collectContext, collectInitial} from 'node-style-loader/collect'

import {createBody, Props} from './body-factory';

type HtmlFactoryProps = {
    body:string;
    initialStyle:string;
    contextStyle:string;
};

export const createApp = async (props:Props) => {
    const body = await doCreateBody(props);

    return createStr(body);
};

const createStr = body => {
    const initialStyle = collectInitial();

    const [contextStyle, bodyStr] = collectContext(
        () => renderToStaticMarkup(body)
    );

    return createHtml({
        initialStyle,
        contextStyle,
        body: bodyStr
    });
};

const createHtml = ({body, initialStyle, contextStyle}:HtmlFactoryProps) =>
    `
        <!doctype html>
        <html>
            <head>
                <meta charset='utf-8'>
                ${initialStyle}
                ${contextStyle}
            </head>
            ${body}
        </html>
    `;

const doCreateBody = ({client, context, devMode, location}:Props) =>
    createBody({
        client,
        devMode,
        context,
        location
    });