import * as React from 'react';
import {render} from 'react-dom';

import {App} from '@components/app/client';

const isTestMode = ():boolean => {
    try {
        return !!process.env.TEST_MODE;
    } catch (e) {
        return false;
    }
};

const testMode = isTestMode();

const wrapper = document.getElementById('app')
    || document.createElement('div');

export default render(<App testMode={testMode}/>, wrapper);