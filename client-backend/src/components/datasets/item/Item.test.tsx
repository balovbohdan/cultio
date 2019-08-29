import * as React from 'react';
import {shallow} from 'enzyme';

import {Item} from './Item';

const dummy = {
    title: 'Contemplative Reptile',
    descr: 'Lizards are a widespread group of...',
    img: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
};

describe('datasets/item/Item', () => {
    it('Should render correctly', () => {
        const item = shallow(<Item {...dummy}/>);

        expect(item).toMatchSnapshot();
    });

    it('Should process click event', () => {
        const onClick = jest.fn();
        const item = shallow(<Item onClick={onClick} {...dummy}/>);

        item.simulate('click');

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('Should render and behave correctly without "onClick" prop', () => {
        const item = shallow(<Item {...dummy}/>);

        item.simulate('click');

        expect(item).toMatchSnapshot();
    });

    it('Should render and behave correctly with "onClick" prop = null', () => {
        const item = shallow(<Item onClick={null} {...dummy}/>);

        item.simulate('click');

        expect(item).toMatchSnapshot();
    });
});