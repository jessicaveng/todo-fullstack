import { updateTodoAPI } from '../apis/todos'
import { getTodos } from './getTodos'

export const UPDATE_TODO = 'UPDATE_TODO'

export function updateTodo (todo) {
  return dispatch => {
    return updateTodoAPI(todo)
      .then(() => dispatch(getTodos()))
  }
}
