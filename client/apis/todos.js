import request from 'superagent'

export function getAllTodosAPI(){
  return request.get('/api/v1/todo')
  .then( res => res.body)
}