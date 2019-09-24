import * as React from 'react';
import {Box, Typography} from '@material-ui/core';

import * as girlFarmer from '@img/girl-farmer.svg';

import {useCss} from './style';

export const Cover = () => {
    const css = useCss();

    return (
        <div className={css.root}>
            <Txt css={css}/>
            <Img css={css}/>
        </div>
    );
};

const Img = ({css}) => {
    const style = {
        backgroundImage: `url(${girlFarmer})`
    };

    return <div style={style} className={css.girlFarmer}/>;
};

const Txt = ({css}) =>
    <Typography className={css.txtWrapper} component='div'>
        <Box
            component='h4'
            className={css.txt}
            fontSize='h4.fontSize'
            fontFamily='Permanent Marker'>
            1. Find inspiration in data
            <br/>
            2. Invent ways to change world
            <br/>
            3. Act!
        </Box>
    </Typography>;