import {getClientBundle} from '@endpoints';

describe('endpoints/get-client-bundle', () => {
    it('Should have valid endpoint data', () => {
        const {method, condition, createListener} = getClientBundle;

        expect(method).toBe('use');
        expect(method).toBeType('string');
        expect(createListener).toBeType('function');
        expect(condition).toBeType(['string', 'object']);
    });

    it('Should create valid listener with "devMode" prop = true', () => {
        const listener = getClientBundle.createListener({
            devMode: true
        });

        expect(listener).toBeType('function');
    });

    it('Should create valid listener with "devMode" prop = false', () => {
        const listener = getClientBundle.createListener({
            devMode: false
        });

        expect(listener).toBeType('function');
    });
});