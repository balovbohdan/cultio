import {root} from '@endpoints';

describe('endpoints/root', () =>{
    it('Should have valid endpoint data', () => {
        const {method, condition, createListener} = root;

        expect(method).toBe('get');
        expect(method).toBeType('string');
        expect(createListener).toBeType('function');
        expect(condition).toBeType(['string', 'object']);
    });

    it('Should create valid listener with "devMode" prop = true', () => {
        const listener = root.createListener({
            devMode: true
        });

        expect(listener).toBeType('function');
    });

    it('Should create valid listener with "devMode" prop = false', () => {
        const listener = root.createListener({
            devMode: false
        });

        expect(listener).toBeType('function');
    });
});