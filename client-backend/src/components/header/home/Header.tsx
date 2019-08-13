import * as React from 'react';
import * as classnames from 'classnames';
import {Grid, Paper, Button} from '@material-ui/core';

import {useCss} from './style';

export const Header = () => {
    const css = useCss();

    return (
        <Grid className={css.root} container spacing={1}>
            <Logo css={css}/>
            <Actions css={css}/>
        </Grid>
    );
};

const Logo = ({css}) =>
    <Grid className={css.item} item xs={1}>
        <Paper className={css.paper}>
            <img
                alt='Logo'
                className={css.itemLogo.img}
                src='https://www.hotjar.com/hs-fs/hubfs/Image/logo.png?width=200&name=logo.png'/>
        </Paper>
    </Grid>;

const Actions = ({css}) => {
    const className = classnames(css.item, css.itemActions);

    return (
        <Grid className={className} item xs={8}>
            <Paper className={css.paper}>
                <RegisterBtn css={css}/>
                <SignInBtn css={css}/>
            </Paper>
        </Grid>
    );
};

const SignInBtn = ({css}) =>
    <Button variant='outlined' color='primary' className={css.btn}>
        Sign In
    </Button>;

const RegisterBtn = ({css}) =>
    <Button variant='contained' color='secondary' className={css.btn}>
        Register
    </Button>;