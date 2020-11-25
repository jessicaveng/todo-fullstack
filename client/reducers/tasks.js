const initialState = []
import { GET_TASKS, SAVE_TASK, DELETE_TASK } from '../actions/index'

const reducer = (state = initialState, action) => {
  switch(action.type){
  case GET_TASKS:
    return action.tasks
  case SAVE_TASK: 
    return [...state, action.task]
    // filter through tasks saved in state and returns every state except the task whose id matches action.id
  case DELETE_TASK:
    return state.filter((task) => task.id != action.id)
  default: 
    return state
  }
}

export default reducer

