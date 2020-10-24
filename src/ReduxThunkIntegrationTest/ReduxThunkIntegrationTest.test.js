import { applyMiddleware, createStore, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import {reduxThunkReducer} from '../ReduxThunkReducer/reduxThunkReducer';

describe('ReduxThunkIntegration', () => {
    test('state should match with sum of input values', () => {
        const store = createStore(combineReducers({reduxThunkReducer}));
        store.dispatch({type: 'ADD', payload: 10});
        const currentStateVal = store.getState().addVal;
    })
})