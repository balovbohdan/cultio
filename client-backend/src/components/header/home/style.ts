import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const cb = (theme:Theme) =>
    createStyles({
        root: {
            padding: '10px 0'
        },
        container: {
            height: '80px',

            display: 'flex',
            justifyContent: 'space-evenly'
        },
        item: {
            height: '100%',

            display: 'flex'
        },
        logoImg: {
            width: 'calc(100% - 10px)'
        },
        paper: {
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: 0,
            boxShadow: 'none',
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,

            display: 'flex',
            alignItems: 'center'
        },
        paperActions: {
            justifyContent: 'flex-end'
        },
        btn: {
            margin: theme.spacing(1)
        }
    });

export const useCss = makeStyles(cb);