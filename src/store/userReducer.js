import { combineReducers} from 'redux'
const moduleName = 'user'

function token(state = '', action) {
  if(action.module !== moduleName) return state
  switch (action.type) {
    case "SET_TOKEN":
      state = action.value
      return state
    case "CLEAR_TOKEN":
      state = ''
      return state
    default:
      return state
  }
}


const userReducer = combineReducers({
  token
})

export default userReducer