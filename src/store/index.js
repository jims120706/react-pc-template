import { combineReducers, createStore } from 'redux'
import countReducer from './countReducer'
import userReducer from './userReducer'

const reducer = combineReducers({ countReducer, userReducer })
const store = createStore(reducer)

export default store