import React from 'react';
import {shallow} from 'enzyme';
import Landing from "./Landing.view";

const props = {};

describe(`Page - Landing`, () => {

    const App = shallow(<Landing {...props}/>);

    it(`Renders without crashing`, () => {
        expect(App).toMatchSnapshot();
    })
})