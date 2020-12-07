import { combineReducers} from 'redux'
const moduleName = 'user'

function token(state = '', action) {
  if(action.module !== moduleName) return state
  switch (action.type) {
    case "SET_TOKEN":
      state = action.value
      sessionStorage.setItem('token', state)
      return state
    case "CLEAR_TOKEN":
      sessionStorage.removeItem('token')
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