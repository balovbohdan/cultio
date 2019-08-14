import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const cb = (theme:Theme) =>
    createStyles({
        root: {
            height: '300px',
            width: 'calc(25% - 10px)',

            margin: '5px',
            background: 'yellow'
        }
    });

export const useCss = makeStyles(cb);