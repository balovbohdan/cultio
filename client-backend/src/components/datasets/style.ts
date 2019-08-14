import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const cb = (theme:Theme) =>
    createStyles({
        root: {
            width: '100%',

            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-around',
        }
    });

export const useCss = makeStyles(cb);