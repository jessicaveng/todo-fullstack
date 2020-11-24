import { apiAddTask, retrieveTasksfromAPI, apiDeleteTask } from "../apis/api";


export const GET_TASKS = "GET_TASKS";
export const SAVE_TASK = "SAVE_TASK";
export const DELETE_TASK = "DELETE_TASK";
// export const ADD_TASK = "ADD_TASK"

// why does this function start by returning (dispatch)???
export function fetchTasks() {
  return (dispatch) => {
    return retrieveTasksfromAPI()
    .then((tasks) => {
      dispatch(getTasks(tasks));
    });
  };
}

export const getTasks = (tasks) => {
  return {
    type: GET_TASKS,
    tasks,
  };
};

export const saveTask = (newTask) => {
  return {
    type: SAVE_TASK,
    task: newTask,
  }
}

export const removeTask = (id) => {
  return {
    type: DELETE_TASK,
    id: id
  }
}

export function addTask(newTask) {
  return (dispatch) => {
    apiAddTask(newTask)
      .then((idObj) => {
        // dispatch(fetchTasks())

        // { task: '', priority: '', completed: 0 }
        const id = idObj.id
        newTask.id = id
        // { task: '', priority: '', completed: 0, id: 17 }

        dispatch(saveTask(newTask))
      })
  };
}

export function deleteTask(id){
  return (dispatch) => {
    apiDeleteTask(id)
    .then(() => dispatch(removeTask(id)))
  } 
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