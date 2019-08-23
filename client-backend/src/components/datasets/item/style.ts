import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const cb = (theme:Theme) =>
    createStyles({
        root: {
            margin: '5px',
            width: 'calc(33.33% - 10px)'
        },
        card: {
            width: '100%'
        },
        cardContent: {
            height: '100px',
            overflow: 'hidden'
        }
    });

export const useCss = makeStyles(cb);