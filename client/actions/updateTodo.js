import {editTodoAPI} from '../apis/todos'
import {getTodos} from './getTodos'

export const UPDATE_TODO = 'UPDATE_TODO'

export function updateTodo(todo){
  return {
    type: UPDATE_TODO,
    todo: todo,
  }
}


export function updateDBTodo(todo) {
    return dispatch => {
        return editTodoAPI(todo)
        .then(todo => {
            console.log(todo)
        // dispatch(getTodos())
        // return null
        })
    }
}