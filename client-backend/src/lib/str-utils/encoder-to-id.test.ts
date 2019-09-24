import {encodeToId} from './encoder-to-id';

describe('lib/str-utils/encoder-to-id', () => {
    it('Should return string', () => {
        const str = '../../disney/mouse/mickey.php';
        const id = encodeToId(str);

        expect(id).toBeType('string');
    });

    it('Should return valid string', () => {
        const str = '../../disney/mouse/mickey.php';
        const id = encodeToId(str);

        expect(id).toBe('______disney_mouse_mickey_php');
    });

    it('Should produce valid output if input is empty string', () => {
        const id = encodeToId('');

        expect(id).toBe('');
        expect(id).toBeType('string');
    });
});