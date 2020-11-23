import {removeTodoAPI} from '../apis/todos'
import {getTodos} from './getTodos'


export const DELETE_TODOS = 'DELETE_TODOS'

// export function delTodo(todo){
//   return {
//     type: DELETE_TODOS,
//     todo: todo,
//   }
// }


export function removeTodo(todo) {
    return dispatch => {
        return removeTodoAPI(todo)
        .then(todo => dispatch(getTodos())
        )
    }
}

// {
//   type: 'DELETE_TODOS',
//   todo: {id:6, todo:"clean", completed:"0"},
// }