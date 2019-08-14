import * as React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// import {useCss} from './style';

const cb = (theme:Theme) =>
    createStyles({
        root: {
            height: '300px',
            width: 'calc(25% - 10px)',

            margin: '5px',
            background: 'yellow'
        },
        card: {
            width: '100%'
        }
    });

export const useCss = makeStyles(cb);

export const Item = () => {
    const css = useCss();

    return (
        <div className={css.root}>
            <Card className={css.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            across all continents except Antarctica
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {/*<CardActions>*/}
                    {/*<Button size="small" color="primary">*/}
                        {/*Share*/}
                    {/*</Button>*/}
                    {/*<Button size="small" color="primary">*/}
                        {/*Learn More*/}
                    {/*</Button>*/}
                {/*</CardActions>*/}
            </Card>
        </div>
    );
};