import request from "superagent";

const url = '/api/v1/todo'



export const getToDo = () => {
  
  return request.get(url)
    .then(res => {
      return res.body
    })
}