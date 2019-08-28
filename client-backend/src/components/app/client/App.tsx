import * as React from 'react';

import {fetchHtml} from './utils';

type Props = {
    html?:string;
    testMode?:boolean;
};

export const App = ({html, testMode}:Props) => {
    const [__html, setHtml] = React.useState(html || '');

    if (!testMode && !html)
        fetchHtml()
            .then(({html}) => setHtml(html));

    return __html
        ? <div dangerouslySetInnerHTML={{ __html }}/>
        : null;
};