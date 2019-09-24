import * as React from 'react';
import {shallow} from 'enzyme';

import {Dataset} from './Dataset';

describe('dataset/Dataset', () => {
    it('Should render correctly', () => {
        const dataset = shallow(<Dataset/>);

        expect(dataset).toMatchSnapshot();
    });
});