// import { getTodos } from "../../server/db/todos"
import request from 'superagent'

export const getTodoList =(todo) =>{
    return{
      type: 'GET_TODO',
      todo: todo
    }
}

export const doneOrNot = check =>{
  return {
  type: 'CHECK',
  check
  }
}

export const completed = complet =>{
  return{
    type: 'GET_ALL_COMPLETED',
    complet: complet
  }
}
export function activePage (page){
  console.log(page)
  return {
    type: 'CHANGE_PAGE',
    page: page
  }
}

export function getTodos(){
  return dispatch =>{
    return request
    .get('/api/v1/todo')
    .then(res =>{
      return dispatch(getTodoList(res.body))
    })
  }
}

export function postTodo (todo){
  const todoList ={todo: todo, completed: false}
  return dispatch => {
    return request
      .post('/api/v1/todo')
      .send(todoList)
      .then(res => res.body)
      .then(()=> dispatch(getTodos()))
    .catch(err => {
      console.log(err)
   })
  }
}


export function checkCompleted(check){
  return dispatch=>{
      return request
        .patch('/api/v1/todo')
        .send(check)
        .then(res => res.body)
        .then(() => dispatch(getTodos()))
    .catch(err => {
      console.log(err)
   })
  }

}

export function deleteTodo(del){
  return dispatch=>{
    return request
    .del('/api/v1/todo')
    .send(del)
    .then(res => res.body)
    .then(() => dispatch(getTodos()))
    .catch(err => {
      console.log(err)
   })
  }
}