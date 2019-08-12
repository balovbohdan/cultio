import create from './factory';

type Props = {
    port:number;
    devMode:boolean;
};

export default ({port, devMode}:Props) => {
    const app = create({ devMode });

    app.listen(
        port,
        () => console.log('Server started.')
    );
};