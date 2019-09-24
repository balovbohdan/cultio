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

    it('Should resolve request', async () => {
        const end = jest.fn();
        const header = jest.fn();
        const sendStatus = jest.fn();
        const send = jest.fn(() => ({ end }));

        const req = { header };
        const res = { send, sendStatus };

        const listener = createHtml.createListener({
            devMode: true
        });

        await listener(req, res);

        expect(end).toHaveBeenCalledTimes(1);
        expect(send).toHaveBeenCalledTimes(1);
        expect(header).toHaveBeenCalledTimes(1);
    });
});