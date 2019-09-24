import {genHash} from './hash-generator';

describe('lib/hash-generator', () => {
    it('Should return hashed string', () => {
        const hash = genHash();

        expect(hash).toBeType('string');
    });

    it('Should return hashed string with a valid length', () => {
        const len = 8;
        const hash = genHash(len);

        expect(hash.length).toBe(len);
    });
});