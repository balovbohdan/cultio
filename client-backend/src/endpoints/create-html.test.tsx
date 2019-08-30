import * as React from 'react';

import {createHtml} from '@endpoints';

describe('endpoints/create-html', () => {
    it('Should have valid endpoint data', () => {
        const {method, condition, createListener} = createHtml;

        expect(method).toBe('get');
        expect(method).toBeType('string');
        expect(createListener).toBeType('function');
        expect(condition).toBeType(['string', 'object']);
    });

    it('Should create valid listener with "devMode" prop = true', () => {
        const listener = createHtml.createListener({
            devMode: true
        });

        expect(listener).toBeType('function');
    });

    it('Should create valid listener with "devMode" prop = false', () => {
        const listener = createHtml.createListener({
            devMode: false
        });

        expect(listener).toBeType('function');
    });
});