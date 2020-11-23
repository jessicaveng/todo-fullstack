import { retrieveTasks } from "../apis/api";

export const GET_TASKS = "GET_TASKS";
import { retrieveTasksfromAPI } from "../apis/api";

export const getTasks = (tasks) => {
  return {
    type: GET_TASKS,
    tasks,
  };
};

export function fetchTasks() {
  return (dispatch) => {
    return retrieveTasksfromAPI().then((tasks) => {
      dispatch(getTasks(tasks));
    });
  };
}



/*

-------- ACTIONS

export function fetchUsers () {
  return (dispatch) => {
    return retrieveUsers()
      .then(users => {
        dispatch(getUsers(users))
      })
  }
}

export function addUser (user) {
  return (dispatch) => {
    return apiAddUser(user)
      .then(id => {
        user.id = id
        dispatch(saveUser(user))
      })
  }
}

--------- API

function retrieveUsers () {
  return request
    .get('/profiles')
    .then(res => res.body)
}

*/