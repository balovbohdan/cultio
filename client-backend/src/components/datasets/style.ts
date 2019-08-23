import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const cb = (theme:Theme) =>
    createStyles({
        root: {
            margin: '0 auto',

            width: '100%',
            maxWidth: '1200px',

            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-around',
        }
    });

export const useCss = makeStyles(cb);