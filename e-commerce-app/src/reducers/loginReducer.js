defaultState = {
    loggedIn: false
}
const loginReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return !state.loggedIn
        case 'LOGOUT':
            return !state.loggedIn
        default:
            return state
    }
}
export default loginReducer