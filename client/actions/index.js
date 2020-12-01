import { getToDoAPI, patchToDoAPI, getAllTodosAPI } from '../apis/api';
import request from 'superagent';


/// -------THIS IS THE ACTIONS-------

export const ADD_TASKS = 'ADD_TASKS';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASKS = 'DELETE_TASKS';
export const COMPLETED_TASKS = 'COMPLETED_TASKS';
export const GET_TASKS = 'GET_TASKS'


export const addTasks = (id) => {
	return {
		type: ADD_TASKS,
		id,
	};
};

export const updateTask = (task) => {
	return {
		type: UPDATE_TASK,
		task,
	};
};

export const deletedTasks = (id) => {
	return {
    type:DELETE_TASKS,
		id
	};
};

export const completedTasks = (completed) => {
	return {
    type:COMPLETED_TASKS,
		completed
	};
};

export const setToDos = (tasks) => {
  return {
    type: GET_TASKS,
    tasks
  }
}

export const fetchToDos = () => {
  return dispatch => {

    return getAllTodosAPI()
      .then(tasks => {
        dispatch(setToDos(tasks))
      })
  }
}

export const toggleTaskCompleted = (task) => {
  return dispatch => {
    task.completed = !task.completed
    return patchToDoAPI(task)
      .then(() => {
        dispatchEvent(updateTask(task))
      })
  }
};