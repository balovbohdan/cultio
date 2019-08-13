import * as path from 'path';

import {Endpoint} from '@endpoints/types';

const createListener = () =>
    async (req, res) => {
        const fileName = extractFileName(req);

        if (fileName === 'index.js') {
            const file = path.resolve(__dirname, '../../dist/client.js');

            res.sendFile(file);
        } else {
            res.end();
        }
    };

const extractFileName = req =>
    String(req.originalUrl).split('/').pop();

export const getClientBundle:Endpoint = {
    method: 'use',
    createListener,
    condition: '/client'
};