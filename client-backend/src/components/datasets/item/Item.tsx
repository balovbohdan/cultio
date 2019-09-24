import * as React from 'react';
import {Link} from 'react-router-dom';

import {
    Card,
    CardMedia,
    Typography,
    CardContent,
    CardActionArea
} from '@material-ui/core';

import * as T from './types';
import {useCss} from './style';

export const Item = ({id, img, descr, title}:T.Props) => {
    const css = useCss();
    const url = createUrl(id);

    return (
        <div className={css.root}>
            <Link to={url}>
                <Card className={css.card}>
                    <CardActionArea>
                        <Media css={css} img={img} title={title}/>
                        <Content css={css} descr={descr} title={title}/>
                    </CardActionArea>
                </Card>
            </Link>
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

const createUrl = (id:number) => '/dataset?id=' + id;