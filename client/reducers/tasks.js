const initialState = []
import { GET_TASKS, SAVE_TASK, DELETE_TASK, UPDATE_TASK_STATUS } from '../actions/index'

function reducer (state = initialState, action) {
  let newState
  let update

  switch(action.type){
  case GET_TASKS:
    return action.tasks
  case SAVE_TASK: 
    return [...state, action.task]
    // filter through tasks saved in state and returns every state except the task whose id matches action.id
  case DELETE_TASK:
    return state.filter((task) => task.id != action.id)
  case UPDATE_TASK_STATUS:
    newState = [...state]
    update = newState.find(task => task.id == action.id)
    update.completed = action.completed 
    return newState
  default: 
    return state
  }
}

export default reducer

