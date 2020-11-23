import { DELETE_TODOS } from '../actions/deleteTodo'
import {GET_TODOS} from '../actions/getTodos'
import {ADD_TODO} from '../actions/addTodo'

const initialState = [{
  "id": 1,
  "todo": "Thrive",
  "completed": 0
}]

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_TODOS:
      return action.todos

    default:
      return state
  }
}

export default reducer