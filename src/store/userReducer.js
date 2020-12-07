import { combineReducers} from 'redux'
const moduleName = 'user'

function count1(state = 0, action) {
  if(action.module !== moduleName) return state
  switch (action.type) {
    case "ADD_C1":
      return state + 1
    case "MINUS_C1":
      return state - 1
    default:
      return state
  }
}

function count2(state = 0, action) {
  if(action.module !== moduleName) return state
  switch (action.type) {
    case "ADD_C2":
      return state + 1
    case "MINUS_C2":
      return state - 1
    default:
      return state
  }
}

const userReducer = combineReducers({
  count1,
  count2,
})

export default userReducer