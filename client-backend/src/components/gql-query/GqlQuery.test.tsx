import gql from 'graphql-tag';
import * as React from 'react';
import {shallow} from 'enzyme';

import {GqlQuery} from './GqlQuery';

describe('gql-query/GqlQuery', () => {
    it('Should render correctly', () => {
        const query = gql`
            {
                books {
                    title
                }
            }
        `;

        const children = () => null;
        const component = shallow(<GqlQuery query={query}>{children}</GqlQuery>);

        expect(component).toMatchSnapshot();
    });
});