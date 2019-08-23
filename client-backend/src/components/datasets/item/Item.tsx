import * as React from 'react';

import {
    Card,
    CardMedia,
    Typography,
    CardContent,
    CardActionArea
} from '@material-ui/core';

import {Props} from './types';
import {useCss} from './style';

export const Item = ({img, descr, title}:Props) => {
    const css = useCss();

    return (
        <div className={css.root}>
            <Card className={css.card}>
                <CardActionArea>
                    <Media img={img} title={title}/>
                    <Content css={css} descr={descr} title={title}/>
                </CardActionArea>
            </Card>
        </div>
    );
};

const Media = ({img, title}) =>
    <CardMedia
        image={img}
        alt={title}
        height='140'
        title={title}
        component='img'/>;

const Content = ({css, title, descr}) =>
    <CardContent className={css.cardContent}>
        <Typography gutterBottom variant='h6' component='h2'>
            {title}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
            {descr}
        </Typography>
    </CardContent>;