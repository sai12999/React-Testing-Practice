export const reduxThunkAddAction = (val) => {
    console.log('ola', val)
    return dispatch => {
            setTimeout(() => {
                dispatch({type: 'ADD', payload: val});
            }, 1000);
    }
}