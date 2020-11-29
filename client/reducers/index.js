import { combineReducers } from 'redux'

import tasks from './tasks'
import completedTasks from './completedTasks'
import activeTasks from './activeTasks'
// import stuff from './stuff'

export default combineReducers({
  tasks,
  completedTasks,
  activeTasks
})
