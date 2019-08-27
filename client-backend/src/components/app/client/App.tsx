import * as React from 'react';

import {fetchHtml} from './utils';

type Props = {
    testRes?:any;
    testMode?:boolean;
};

export const App = (props:Props) => {
    const [__html, setHtml] = React.useState('');

    doFetchHtml(props)
        .then(({html}) => setHtml(html));

    return __html
        ? <div dangerouslySetInnerHTML={{ __html }}/>
        : null;
};

const doFetchHtml = async ({testMode, testRes}:Props) =>
    testMode
        ? testRes || { html: 'html' }
        : await fetchHtml();