import * as React from 'react';
import {shallow} from 'enzyme';

import {Datasets} from './Datasets';

const dummy = {
    items: [
        {
            id: 1,
            title: 'Contemplative Reptile',
            descr: 'Lizards are a widespread group of...',
            img: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
        },
        {
            id: 2,
            title: 'Contemplative Reptile',
            descr: 'Lizards are a widespread group of...',
            img: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
        }
    ]
};

describe('datasets/Datasets', () => {
    it('Should render correctly', () => {
        const datasets = shallow(<Datasets {...dummy}/>);

        expect(datasets).toMatchSnapshot();
    });

    it('Should render correctly with empty "items" prop', () => {
        const datasets = shallow(<Datasets items={[]}/>);

        expect(datasets).toMatchSnapshot();
    });

    it('Should render correctly with "items" prop = null', () => {
        const datasets = shallow(<Datasets items={null}/>);

        expect(datasets).toMatchSnapshot();
    });

    it('Should render correctly without "items" prop', () => {
        const datasets = shallow(<Datasets/>);

        expect(datasets).toMatchSnapshot();
    });
});