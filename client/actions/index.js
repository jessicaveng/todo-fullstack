// import { getTodos } from "../../server/db/todos"
import request from 'superagent'

export const getTodoList =(todo) =>{
  console.log('hello')
    return{
      type: 'GET_TODO',
      todo: todo
    }
}

export const addTodo =(addToDo)=>{
  return {
    type: 'ADD_TODO',
    todo: addToDo
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
  return () => {
    return request
    .post('/api/v1/todo').send(todo)
    .catch(err => {
      console.log(err)
   })
  }
}