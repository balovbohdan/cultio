import * as React from 'react';
import {StaticRouter} from 'react-router';

import startServer from '@lib/server-starter';

const c = require('../config');

startServer({
    port: c.port,
    devMode: c.devMode
});