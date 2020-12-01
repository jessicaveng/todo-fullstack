const initialState = [];

import { UPDATE_TASK, DELETE_TASKS, CREATE_TASK, GET_TASKS } from '../actions/index';

/// -------THIS IS THE REDUCER-------

function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_TASKS:
			return action.tasks;

		case UPDATE_TASK:
			let toUpdate = [...state].find((task) => task.id == action.task.id);
			console.log(toUpdate);
			toUpdate.completed = action.task.completed;
			toUpdate.task = action.task.task;
			return [...state];

		case CREATE_TASK:
			return [...state, action.task];

		case DELETE_TASKS:
			return state.filter((item) => item.id !== action.id);

		default:
			return state;
	}
}

export default reducer;
