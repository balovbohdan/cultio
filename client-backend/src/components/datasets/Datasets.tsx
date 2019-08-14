import * as React from 'react';

import {Item} from './Item';
import {useCss} from './style';

export const Datasets = () => {
    const css = useCss();

    return (
        <div className={css.root}>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    );
};