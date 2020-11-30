import { addTodoAPI } from '../apis/todos'
import { getTodos } from './getTodos'

export const ADD_TODO = 'ADD_TODO'

export function createTodo (todo) {
  return dispatch => {
    return addTodoAPI({ todo: todo, completed: 0 })
      .then(() => dispatch(getTodos()))
  }
}
