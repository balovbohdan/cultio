import {applyEndpoints} from './endpoints-applier';

describe('Endpoints applier to the server', () => {
    const app = {
        get() {},
        use() {}
    };

    it('Should apply endpoints in dev mode', () => {
        const res = applyEndpoints(app, {
            devMode: true
        });

        expect(res).not.toBeNull();
    });

    it('Should apply endpoints in production mode', () => {
        const res = applyEndpoints(app, {
            devMode: false
        });

        expect(res).not.toBeNull();
    });
});