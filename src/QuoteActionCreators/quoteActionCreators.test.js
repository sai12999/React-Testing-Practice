import {generateQuote} from './quoteActionCreators';
describe('quoteActionCretors', () => {
    test('should return proper payload and type', () => {
        expect(generateQuote('JAI HIND')).toEqual({type: 'NEW_QUOTE', payload: 'JAI HIND'});
    })
})