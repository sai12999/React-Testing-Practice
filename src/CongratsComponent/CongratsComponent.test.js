import React from 'react';
import Enzymne, { shallow } from 'enzyme';
import { CongratsComponent } from './CongratsComponent';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzymne.configure({ adapter: new EnzymeAdapter() });

describe('Congrats Component', () => {
    test('should render msg on success', () => {
        const wrapper = shallow(<CongratsComponent success={true} />);
        const congratsText = wrapper.find('[data-test="congrats"]');
        expect(congratsText.text()).toBe('Congrats you have guessed the word');
    })

    test('should not render msg on failure', () => {
        const wrapper = shallow(<CongratsComponent success={false} />);
        const congratsText = wrapper.find('[data-test="congrats"]');
        expect(congratsText.text()).toBe('');
    })
})

