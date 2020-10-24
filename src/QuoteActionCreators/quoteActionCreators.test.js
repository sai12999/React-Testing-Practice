import {generateQuote} from './quoteActionCreators';
describe('quoteActionCretors', () => {
    test('should return proper payload and type', () => {
        expect(generateQuote('JAI HIND')).toMatchObject({type: 'NEW_QUOTE', payload: 'JAI HIND'});
    })
})