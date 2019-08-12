import * as React from 'react';
import {hydrate, render} from 'react-dom';

import {App} from '@components/app/client';

render(
    <App/>,
    document.getElementById('app')
);