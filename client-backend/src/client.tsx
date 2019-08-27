import * as React from 'react';
import {render} from 'react-dom';

import {App} from '@components/app/client';

const wrapper = document.getElementById('app')
    || document.createElement('div');

export default render(<App/>, wrapper);