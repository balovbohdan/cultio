import * as React from 'react';

import {Item} from './Item';
import * as T from './types';
import {useCss} from './style';

export const Datasets = ({items}:T.Props) => {
    if (!items || items.length <= 0)
        return null;

    const css = useCss();

    return (
        <div className={css.root}>
            <Items items={items}/>
        </div>
    );
};

const Items = ({items}:T.ItemsProps) => {
    const c = items.map(({id, img, descr, title}) =>
        <Item key={id} id={id} img={img} descr={descr} title={title}/>
    );

    return <>{c}</>;
};