import {removeTodoAPI} from '../apis/todos'

export const DELETE_TODOS = 'DELETE_TODOS'

export function delTodo(todo){
  return {
    type: DELETE_TODOS,
    todo: todo,
  }
}


export function removeTodo(todo) {
    return dispatch => {
        return removeTodoAPI(todo)
        .then(todo => {
            console.log(todo)
        dispatch(delTodo(todo))
        return null
        })
    }
}