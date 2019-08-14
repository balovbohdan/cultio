import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const cb = (theme:Theme) =>
    createStyles({
        root: {
            width: '100%',
            height: 'calc(100vh - 100px)',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        girlFarmer: {
            margin: '5px',

            width: '100%',
            height: '100%',
            maxWidth: '400px',
            maxHeight: '400px',

            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
        },
        txtWrapper: {
            margin: '5px',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        txt: {
            color: '#08D356',
            textAlign: 'left'
        }
    });

export const useCss = makeStyles(cb);