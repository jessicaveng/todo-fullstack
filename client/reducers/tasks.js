const initialState = []
import { GET_TASKS } from '../actions/index'

const reducer = (state = initialState, action) => {
  switch(action.type){
  case GET_TASKS:
    return action.tasks
  default: 
    return state
  }
}

export default reducer