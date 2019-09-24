import create from './factory';

describe('lib/server-starter/factory', () => {
    it('Should create server in dev mode', () => {
        const server = create({
            devMode: true
        });

        expect(server).not.toBeNull();
    });

    it('Should create server in production mode', () => {
        const server = create({
            devMode: false
        });

        expect(server).not.toBeNull();
    });
});