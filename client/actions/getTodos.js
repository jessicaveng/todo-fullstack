import {getAllTodosAPI} from '../apis/todos'

export const GET_TODOS = 'GET_TODOS'

export function setTodos(todos){
  return {
    type: GET_TODOS,
    todos,
  }
}

export function getTodos() {
  return dispatch => {
    return getAllTodosAPI()
    .then(todos => {
      dispatch(setTodos(todos))
      return null
    })
  }
}