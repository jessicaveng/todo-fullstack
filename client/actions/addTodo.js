import {addTodoAPI} from '../apis/todos'

export const ADD_TODO = 'ADD_TODO'

export function addTodo(todo){
  return {
    type: ADD_TODO,
    todo: todo,
  }
}


export function createTodo(todo) {
    return dispatch => {
        return addTodoAPI(todo)
        .then(todo => {
            console.log(todo)
        dispatch(addTodo(todo))
        return null
        })
    }
}