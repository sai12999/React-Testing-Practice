import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import QuoteGeneratorComponent from './QuoteGeneratorComponent';
import React from 'react';
import {quoteReducer} from '../QuoteReducer/quoteReducer';
import { combineReducers, createStore } from 'redux';

Enzyme.configure({adapter: new EnzymeAdapter()});

describe('QuoteGeneratorComponent', () => {
    let setUp;
    let findAttrNode;
    beforeAll(() => {
        const store = createStore(combineReducers({quoteReducer}));
        setUp = () => {
            return shallow(<QuoteGeneratorComponent store={store}/>)
        }
        findAttrNode = (wrapper, attr) => {
            return wrapper.find(`[data-test="${attr}"]`);
        }
    })

    test('should render without any error', () => {
        const wrapper = setUp();
        const quoteComponent = wrapper.dive().dive();
        const quoteCompNode = findAttrNode(quoteComponent, 'component-quote');
        expect(quoteCompNode.length).toBe(1);
    })
})