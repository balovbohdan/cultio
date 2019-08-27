import * as React from 'react';

import Client from './client';

describe('React app renderer', () => {
    it('React app should be embedded in the page', () => {
        const snapshot = Object.assign({}, Client, {
            _reactInternalInstance: 'censored'
        });

        expect(JSON.stringify(snapshot)).toMatchSnapshot();
    });
});