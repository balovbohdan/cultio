import * as path from 'path';

import {Endpoint} from '@endpoints/types';

const createListener = () =>
    async (req, res) => {
        const file = getFile(req);

        res.sendFile(file);
    };

const getFile = (req) => {
    const fileName = extractFileName(req);

    return path.resolve(__dirname, '../../assets/', fileName);
};

const extractFileName = req =>
    String(req.originalUrl).replace(/\/?static\/assets\//, '');

export const assets:Endpoint = {
    method: 'use',
    createListener,
    condition: '/static/assets'
};