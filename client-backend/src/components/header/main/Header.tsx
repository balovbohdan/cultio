import * as React from 'react';

import {Menu} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';

import {
    AppBar,
    IconButton,
    Button,
    Typography,
    Toolbar
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

export const Header = () => {
    const styles = useStyles();

    return (
        <>
            <div className={styles.root}>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton
                            edge='start'
                            className={styles.menuButton}
                            color='inherit'
                            aria-label='menu'>
                            <Menu/>
                        </IconButton>
                        <Typography variant='h6' className={styles.title}>
                            News
                        </Typography>
                        <Button color='inherit'>Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
};