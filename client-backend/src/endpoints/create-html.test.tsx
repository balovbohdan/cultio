import * as React from 'react';

import {createHtml} from '@endpoints';

describe('endpoints/create-html', () => {
    it('Should have valid endpoint data', () => {
        const {method, condition, createListener} = createHtml;

        expect(method).toBeType('string');
    });
});