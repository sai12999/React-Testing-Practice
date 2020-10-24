const initialState = {
    addVal: 0
}

export const reduxThunkReducer = (state = initialState, action) => {
    switch(action.type) {
         case 'ADD': {
             console.log(action.payload)
             return {
                addVal: action.payload
             }
         }
         default: return state;
    }
}