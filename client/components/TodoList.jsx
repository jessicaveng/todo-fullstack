import React from 'react'
import { connect } from 'react-redux'

import TodoItem from './TodoItem'

function TodoList (props) {
  function returnProps () {
    // if status is completed, filter by completed only
    // if status is active, filter by uncompleted only
    // else return all todos
    if (props.match.params.status === 'completed') {
      return props.todos.filter(todo => todo.completed === 1)
    } else if (props.match.params.status === 'active') {
      return props.todos.filter(todo => todo.completed === 0)
    } else {
      return props.todos
    }
  }

  return (
    <>
      <input id='toggle-all'className='toggle-all' type='checkbox' />
      <label htmlFor='toggle-all'>Mark All As Completed</label>
      <ul className='todo-list'>
        { returnProps().map(todo => {
          return (
            <>
              <TodoItem todo={todo} />
            </>
          )
        }
        )}
      </ul>
    </>
  )
}

function mapStateToProps (globalState) {
  return {
    todos: globalState.getTodos
  }
}
export default connect(mapStateToProps)(TodoList)
