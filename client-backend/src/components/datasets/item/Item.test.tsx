import * as React from 'react';
import {shallow} from 'enzyme';

import {Item} from './Item';

const dummy = {
    id: 1,
    title: 'Contemplative Reptile',
    descr: 'Lizards are a widespread group of...',
    img: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
};

describe('datasets/item/Item', () => {
    it('Should render correctly', () => {
        const item = shallow(<Item {...dummy}/>);

        expect(item).toMatchSnapshot();
    });
});