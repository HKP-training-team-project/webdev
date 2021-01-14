import loginReducer from './loginReducer'
import itemReducer from './itemReducer'
import { combineReducers } from 'redux'

let mainReducer = combineReducers({
    login: loginReducer,
    item: itemReducer
})
export default mainReducer