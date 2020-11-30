import { deleteTodoAPI } from '../apis/todos'
import { getTodos } from './getTodos'

export const DELETE_TODO = 'DELETE_TODO'

export function removeTodo (todo) {
  return dispatch => {
    return deleteTodoAPI(todo)
      .then(todo => dispatch(getTodos())
      )
  }
}
