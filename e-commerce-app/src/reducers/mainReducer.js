import loginReducer from './loginReducer'
import itemReducer from './itemReducer'
import signupReducer from './signupReducer'
import itemsReducer from './itemsReducer'
import { combineReducers } from 'redux'

let mainReducer = combineReducers({
    login: loginReducer,
    item: itemReducer,
    signup: signupReducer,
    items: itemsReducer
})
export default mainReducer