import { combineReducers } from 'redux'

import todos from './todos'
import todosLeft from './todosLeft'

export default combineReducers({
  todos, todosLeft
})
