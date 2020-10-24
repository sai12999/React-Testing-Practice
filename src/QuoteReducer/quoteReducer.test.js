const { quoteReducer } = require("./QuoteReducer")

describe('quote reducer', () => {
    test('it should return a valid state with default action', () => {
        const resultState = quoteReducer(undefined, {});
        expect(resultState.quotes.length).toBe(1);
    })
    test('it should return a valid state with valid action', () => {
        const resultState = quoteReducer(undefined, {type: 'NEW_QUOTE', payload: 'vandemataram'});
        expect(resultState.quotes.length).toBe(2);
    })
})