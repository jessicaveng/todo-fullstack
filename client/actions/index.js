import { apiAddTask, retrieveTasksfromAPI, apiDeleteTask } from "../apis/api";
import request from 'superagent'

export const GET_TASKS = "GET_TASKS";
export const SAVE_TASK = "SAVE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK_STATUS = "UPDATE_TASK_STATUS"
export const UPDATE_TASK_DETAILS = "UPDATE_TASK_DETAILS"
// export const ADD_TASK = "ADD_TASK"


export function fetchTasks() {
  return (dispatch) => {
    return retrieveTasksfromAPI()
      .then((tasks) => {
        dispatch(getTasks(tasks));
      });
  };
}


export const updateTaskStatus = (id, completed) => {
  return dispatch => {
      return request  
      .patch('/api/v1/tasks/' + id).send({completed: completed})
      .then(dispatch(statusUpdated(id, completed)))
      .catch(err => console.log(err))
  }
}
// export function updateTaskStatus(id, completed) {
//   return (dispatch) => {
//     return apiUpdateTask()
//       .then((id, status) => {
//         dispatch(statusUpdated(id, status))
//       })
//   }
// }

export const updateTaskDetails = (id, input) => {
  console.log(input, id)
  return dispatch => {
    return request
    .patch('/api/v1/tasks/' + id).send({task: input})
    .then(dispatch(taskUpdated(id, input)))
    .catch(err => console.log(err))
  }
}

export const taskUpdated = (id, input) => {
  return {
    type: UPDATE_TASK_DETAILS,
    id, 
    input
  }
}

export const statusUpdated = (id, completed) => {
  return {
    type: UPDATE_TASK_STATUS,
    id,
    completed
  }
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

export function deleteTask(id) {
  return (dispatch) => {
    apiDeleteTask(id)
      .then(() => dispatch(removeTask(id)))
  }
}