export const generateQuote = (quote) => {
   return {type: 'NEW_QUOTE', payload: quote};
}