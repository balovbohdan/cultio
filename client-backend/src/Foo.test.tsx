import * as React from 'react';
import { shallow } from 'enzyme';

import {Foo} from './Foo';

describe('Foo', () => {
    it('test Foo', () => {
        const component = shallow(<Foo name={'name'}/>);

        expect(component.text()).toEqual('name');
    })
});