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
    console.log(todo)
    return dispatch => {
        return addTodoAPI({todo:todo, completed:0})
        .then( ()=> dispatch(getTodos()))
    }
}