const initialState = [];

import { ADD_TASKS, UPDATE_TASK, DELETE_TASKS, COMPLETED_TASKS, GET_TASKS } from '../actions/index';

/// -------THIS IS THE REDUCER-------

function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TASKS:
      return addTasks(state,action.tasks);
    case GET_TASKS:
      return action.tasks
		case UPDATE_TASK:
      let toUpdate = [...state].find(task => task.id == action.task.id)
      console.log(toUpdate)
      toUpdate.completed = action.task.completed
      toUpdate.task = action.task.task
      return [...state]
      
		case DELETE_TASKS:
      return  state.filter(item => item.id !== action.id)
      
		case COMPLETED_TASKS:
      return completedTasks(state, action.completedTasks);
      
		default:
			return state;
	}
}

export default reducer;
