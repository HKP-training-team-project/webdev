import loginReducer from './loginReducer'
import itemReducer from './itemReducer'
import signupReducer from './signupReducer'
import { combineReducers } from 'redux'

let mainReducer = combineReducers({
    login: loginReducer,
    item: itemReducer,
    signup: signupReducer
})
export default mainReducer