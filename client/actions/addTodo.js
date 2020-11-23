import {addTodoAPI} from '../apis/todos'
import {getTodos} from './getTodos'
export const ADD_TODO = 'ADD_TODO'

// export function addTodo(todo){
//   return {
//     type: ADD_TODO,
//     todo: todo,
//   }
// }


export function createTodo(todo) {
    return dispatch => {
        return addTodoAPI(todo)
        .then(todo => {
        dispatch(getTodos())
        return null
        })
    }
}