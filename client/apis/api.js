import request from 'superagent'

const tasksAPI = '/api/v1/tasks'

export function retrieveTasksfromAPI (){
  return request
  .get(tasksAPI)
  .then(res => res.body)
}

