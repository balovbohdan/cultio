import {assets} from '@endpoints';

describe('endpoints/assets', () => {
    it('Should have valid endpoint data', () => {
        const {method, condition, createListener} = assets;

        expect(method).toBe('use');
        expect(method).toBeType('string');
        expect(createListener).toBeType('function');
        expect(condition).toBeType(['string', 'object']);
    });

    it('Should create valid listener with "devMode" prop = true', () => {
        const listener = assets.createListener({
            devMode: true
        });

        expect(listener).toBeType('function');
    });

    it('Should create valid listener with "devMode" prop = false', () => {
        const listener = assets.createListener({
            devMode: false
        });

        expect(listener).toBeType('function');
    });
});