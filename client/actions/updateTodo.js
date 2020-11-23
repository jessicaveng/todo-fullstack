import {editTodoAPI} from '../apis/todos'
import {getTodos} from './getTodos'

export const UPDATE_TODO = 'UPDATE_TODO'

// export function updateTodo(todo){
//   return {
//     type: UPDATE_TODO,
//     todo: todo,
//   }
// }

/*
Function that will take a single data and update in the datbase
*/
export function updateDBTodo(todo) {
    return dispatch => {
        return editTodoAPI(todo)
          .then(() => dispatch(getTodos()))
    }
}