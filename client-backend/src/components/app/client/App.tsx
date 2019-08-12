import * as React from 'react';

import {fetchHtml} from './utils';

export const App = () => {
    const [__html, setHtml] = React.useState('');

    fetchHtml()
        .then(({html}) => setHtml(html));

    return __html
        ? <div dangerouslySetInnerHTML={{ __html }}/>
        : null;
};