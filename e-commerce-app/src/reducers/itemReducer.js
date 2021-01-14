defaultState = {
    quantity: 0
}
const itemReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}
export default itemReducer