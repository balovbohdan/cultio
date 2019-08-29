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

export const Item = ({img, descr, title, onClick}:Props) => {
    onClick = onClick || undefined;

    const css = useCss();

    return (
        <div onClick={onClick} className={css.root}>
            <Card className={css.card}>
                <CardActionArea>
                    <Media css={css} img={img} title={title}/>
                    <Content css={css} descr={descr} title={title}/>
                </CardActionArea>
            </Card>
        </div>
    );
};

const Media = ({css, img, title}) =>
    <CardMedia
        image={img}
        alt={title}
        title={title}
        component='img'
        className={css.cardMedia}/>;

const Content = ({css, title, descr}) =>
    <CardContent className={css.cardContent}>
        <Typography gutterBottom variant='h6' component='h2'>
            {title}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
            {descr}
        </Typography>
    </CardContent>;