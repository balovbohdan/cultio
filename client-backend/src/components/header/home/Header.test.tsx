import * as React from 'react';
import {shallow} from 'enzyme';

import {Header} from './Header';

describe('header/home/Header', () => {
    it('Should render correctly', () => {
        const header = shallow(<Header/>);

        expect(header).toMatchSnapshot();
    });
});