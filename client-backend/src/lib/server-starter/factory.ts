import * as path from 'path';
import * as watch from 'watch';
import * as reload from 'reload';
import * as Express from 'express';

import {applyEndpoints} from './utils';

type Props = {
    devMode:boolean;
};

export default (props:Props) => {
    const app = new Express();

    useStatic(app);
    doApplyEndpoints(app, props);
    initHotReload(app, props);

    return app;
};

const useStatic = app => {
    app.use('/client', (req, res) => {
        const fileName = extractFileName(req);

        if (fileName === 'index.js') {
            const file = path.resolve(__dirname, '../../../dist/client.js');

            res.sendFile(file);
        } else {
            res.end();
        }
    });
};

const extractFileName = req =>
    req.originalUrl.split('/').pop();

const doApplyEndpoints = (app, {devMode}:Props) =>
    applyEndpoints(app, { devMode });

const initHotReload = (app, {devMode}:Props) => {
    if (!devMode) return;

    const success = r => {
        const cb = () => r.reload();
        const root = path.join(__dirname, '../../../dist');

        watch.watchTree(root, cb);
    };

    const error = err =>
        console.log('Failed to init hot reload.', err.message);

    reload(app)
        .then(success)
        .catch(error);

    return app;
};