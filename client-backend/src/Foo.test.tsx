import * as React from 'react';
import { shallow } from 'enzyme';

import {Foo} from './Foo';

// @ts-ignore
describe('Foo', () => {
    // @ts-ignore
    it('test Foo', () => {
        const component = shallow(<Foo name={'name'}/>);

        // @ts-ignore
        expect(component.text()).toEqual('name');
    })
});