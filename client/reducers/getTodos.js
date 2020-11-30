import { GET_TODOS } from '../actions/getTodos'
import { ADD_TODO } from '../actions/addTodo'

import { DELETE_TODO } from '../actions/deleteTodo'
// import { UPDATE_TODO } from '../actions/updateTodo'

const initialState = [{
  id: 1,
  todo: 'Win',
  completed: 0
}]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return action.todos
    case ADD_TODO:
      return [...state, action.todos]
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.todo.id)
    default:
      return state
  }
}

export default reducer
