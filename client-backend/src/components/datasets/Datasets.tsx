import * as React from 'react';

import {Item} from './Item';
import * as T from './types';
import {useCss} from './style';

const data = [
    {
        title: 'Contemplative Reptile',
        descr: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species...',
        img: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
    }
];

export const Datasets = () => {
    const css = useCss();

    return (
        <div className={css.root}>

        </div>
    );
};

const Items = ({items}) => {

};