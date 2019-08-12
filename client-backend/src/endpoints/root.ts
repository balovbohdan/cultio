import * as path from 'path';

import * as config from '../../config';
import {Endpoint} from '@endpoints/types';

const createListener = () =>
    async (req, res) => {
        const file = getFile();

        res.sendFile(file);
    };

const getFile = () => {
    const name = config.devMode
        ? 'index.dev.html'
        : 'index.html';

    return path.resolve(__dirname, `../../assets/html/${name}`);
};

export const root:Endpoint = {
    method: 'get',
    createListener,
    condition: /^\/[a-z\-]*$/
};