import * as React from 'react';
import * as classnames from 'classnames';
import {Grid, Paper, Button} from '@material-ui/core';

import * as logo from '@img/logo.svg';

import {useCss} from './style';

export const Header = () => {
    const css = useCss();

    return (
        <div className={css.root}>
            <Grid className={css.container} container spacing={1}>
                <Logo css={css}/>
                <Actions css={css}/>
            </Grid>
        </div>
    );
};

const Logo = ({css}) =>
    <Grid className={css.item} item xs={1}>
        <Paper className={css.paper}>
            <img
                alt='Logo'
                src={logo}
                className={css.logoImg}/>
        </Paper>
    </Grid>;

const Actions = ({css}) => {
    const classNamePaper = classnames(css.paper, css.paperActions);

    return (
        <Grid className={css.item} item xs={8}>
            <Paper className={classNamePaper}>
                <Button className={css.btn}>About</Button>
                <Button className={css.btn}>Support</Button>
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