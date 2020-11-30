import { combineReducers } from 'redux'

// import stuff from './stuff'
import setTasks from './setTasks'
import deleteTask from './deleteTask'

export default combineReducers({
  setTasks,
  deleteTask
})
