import * as React from 'react';
import {shallow} from 'enzyme';

import {act} from 'react-dom/test-utils';
import {render, unmountComponentAtNode} from 'react-dom';

import {App} from './App';

describe('app/client/App', () => {
    let container:null|HTMLDivElement = null;

    beforeEach(() => {
        container = document.createElement('div');

        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container && container.remove();
        container = null;
    });

    it('Should render correctly', () => {
        const app = shallow(<App testMode={true}/>);

        expect(app).toMatchSnapshot();
    });

    it('Should have HTML string in the state', async () => {
        const html = 'html';

        await act(async () => {
            const component = <App html={html} testMode={true}/>;

            render(component, container);
        });

        container && expect(container.textContent).toMatch(html);
    });
});