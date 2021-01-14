const defaultState = {
    loggedIn: false,
    isAdmin: false,
    message: ''
}
const loginReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'LOGIN-SUCCESS-USER':
            return {
                ...state,
                loggedIn: true
            }
        case 'LOGIN-SUCCESS-ADMIN':
            return {
                ...state,
                loggedIn: true,
                isAdmin: true
            }
        case 'LOGOUT':
            return {
                defaultState
            }
        case 'LOGIN-ERROR':
            return {
                ...state,
                message: action.payload.message
            }
        default:
            return state
    }
}
export default loginReducer