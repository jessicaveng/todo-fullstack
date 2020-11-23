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
    case ADD_TODO:
      return action.todo

    case GET_TODOS:
      return action.todos

    case DELETE_TODOS:
      return state.filter(todo => todo.id == action.todo.id)

    default:
      return state
  }
}

export default reducer