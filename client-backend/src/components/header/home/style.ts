import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const cb = (theme:Theme) =>
    createStyles({
        root: {
            height: '80px',

            display: 'flex',
            justifyContent: 'space-evenly'
        },
        item: {
            height: '100%',

            display: 'flex'
        },
        itemActions: {
            justifyContent: 'flex-end'
        },
        itemLogo: {
            img: {
                width: '10px'
            }
        },
        paper: {
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
        btn: {
            margin: theme.spacing(1)
        }
    });

export const useCss = makeStyles(cb);