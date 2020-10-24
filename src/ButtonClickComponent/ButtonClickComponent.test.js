import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { ButtonClickComponent } from './ButtonClickComponent';
import React from 'react';

Enzyme.configure({adapter: new EnzymeAdapter()});

describe('ButtonClickComponent', () => {
    test('initial counter value', () => {
        const buttonClickComponentWrapper = shallow(<ButtonClickComponent/>);
        const counter = buttonClickComponentWrapper.find('[data-test="count"]');
        expect(counter.text()).toBe("0");
    })
})