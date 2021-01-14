const defaultState = {
    userCreated: false,
    message: ''
}
const signupReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'SIGNUP-SUCCESS':
            return {
                ...state,
                userCreated: true
            }
        case 'SIGNUP-ERROR':
            return {
                ...state,
                message: action.payload.message
            }
        default:
            return state
    }
}
export default signupReducer