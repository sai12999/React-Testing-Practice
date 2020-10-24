const initialState = {
    quotes: ['om namah sivaiah']
}

export const quoteReducer = (state = initialState, action) => {
    switch(action.type) {
         case 'NEW_QUOTE': {
             let quotesDup = [...state.quotes];
             quotesDup.push(action.payload);
             return {
                quotes: quotesDup
             }
         }
         default: return state;
    }
}