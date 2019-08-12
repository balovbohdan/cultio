import * as path from 'path';

import {Endpoint} from '@endpoints/types';

const createListener = () =>
    async (req, res) => {
        const file = getFile(req);

        res.sendFile(file);
    };

const getFile = (req) => {
    const fileName = extractFileName(req);

    return path.resolve(__dirname, '../../../assets/fonts/', fileName);
};

const extractFileName = req =>
    req.originalUrl.split('/').pop();

export const fonts:Endpoint = {
    method: 'get',
    createListener,
    condition: '/assets/fonts'
};