import request from 'superagent'

const url = '/api/v1/todos'

export const getToDo = () => {
  return request.get(url)
    .then(res => {
      return res.body
    })
}

export const addToDo = (text) => {
  const newToDo = {
    text: text
  }
  return request.post(url)
    .send(newToDo)
    .then(res => {
      return res.body
    })
}

export const editToDo = (id, newText) => {
  const newToDo = {
    id: id,
    text: newText
  }
  return request.patch(url)
    .send(newToDo)
    .then(res => {
      return res.body
    })
}

export const deleteToDo = (id) => {
  const targetToDo = {
    id: id
  }
  console.log('api ', targetToDo)
  return request.delete(url + "/delete")
    .send(targetToDo)
    .then(console.log(targetToDo))
    .then(res => {
      console.log("body: " + res.body)
      return res.body
    })
}