import * as Express from 'express';

import create from './factory';

type Props = {
    port:number;
    devMode:boolean;
};

export default ({port, devMode}:Props):Express => {
    const app = create({ devMode });

    app.listen(
        port,
        () => console.log('Server started.')
    );
};