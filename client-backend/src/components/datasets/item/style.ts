import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const cb = (theme:Theme) =>
    createStyles({
        root: {
            margin: '10px',
            width: 'calc(33.33% - 20px)'
        },
        card: {
            width: '100%'
        },
        cardMedia: {
            height: '170px'
        },
        cardContent: {
            height: '130px',
            overflow: 'hidden'
        }
    });

export const useCss = makeStyles(cb);