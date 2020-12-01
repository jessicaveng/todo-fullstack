import { getToDoAPI, patchToDoAPI, getAllTodosAPI , createToDoAPI } from '../apis/api';
import request from 'superagent';


/// -------THIS IS THE ACTIONS-------


export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASKS = 'DELETE_TASKS';
export const GET_TASKS = 'GET_TASKS'
export const CREATE_TASK = 'CREATE_TASK'


export const addTaskToDbAndGlobState = (theNewTask) => {
  
  const theNewTaskObject = {
    task: theNewTask,
    priority: 'low',
    completed: 'false'
  }

  return dispatch => {

    return createToDoAPI(theNewTaskObject)
      .then((thisThing) => {
        theNewTaskObject.id = thisThing.id
        dispatch(createTask(theNewTaskObject))
      })
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

export const createTask = (task) => {
	return {
		type: CREATE_TASK,
		task,
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
    type: DELETE_TASKS,
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



export const toggleTaskCompleted = (task) => {
  return dispatch => {
    task.completed = !task.completed
    return patchToDoAPI(task)
      .then(() => {
        dispatchEvent(updateTask(task))
      })
  }
};

export function deleteSingleTask(id) {
  return (dispatch) => {
    deleteToDoAPI(id)
      .then(() => dispatch(removeTask(id)))
  }
}