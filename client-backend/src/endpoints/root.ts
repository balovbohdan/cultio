import * as path from 'path';

import {Endpoint} from '@endpoints/types';

const createListener = () =>
    async (req, res) => {
        const html = path.resolve(__dirname, '../../assets/html/index.html');

        res.sendFile(html);
    };

export const root:Endpoint = {
    method: 'get',
    createListener,
    condition: /^\/[a-z\-]*$/
};