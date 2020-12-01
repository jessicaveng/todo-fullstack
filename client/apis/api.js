import request from "superagent";

/// -------THIS IS THE API-------

//Gets the /todo route from toDoRoutes
const url = '/todo/'



//GET CRUD R = Read
export const getToDoAPI = () => {
  
  return request.get(url)
    .then(res => {return res.body
    })
}

export function getAllTodosAPI () {
  return request.get(url)
    .then(res => res.body)
}

export function patchToDoAPI (task) {
  return request.patch(url + task.id)
    .send(task)
    .then(res => res.body)
}



//POST CRUD C = Create

// PATCH CRUD U = UPDATE

// update classname to completed in app.jsx

// CRUD D = DELETE