import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeTodo } from '../actions/deleteTodo'
import Popup from './Popup'

function Footer (props) {
  const [showPopup, setShowPopup] = useState(false)

  function getCompleted () {
    return props.todos.filter(todo => todo.completed === 0).length
  }

  function deleteTodo (todoProps) {
    const completedTodos = props.todos.filter(todo => todo.completed === 1)
    completedTodos.map(todo => props.dispatch(removeTodo(todo)))
    setShowPopup(!showPopup)
  }

  return (
    <>
      <span className='filters'><strong>{getCompleted()}</strong> remaining tasks</span>
      <br></br>
      <ul className='filters'>
        <li>
          <NavLink exact to='/' activeClassName= 'selected'>All</NavLink>
        </li>
        <li>
          <NavLink exact to='/active' activeClassName= 'selected'>Active</NavLink>
        </li>
        <li>
          <NavLink exact to='/completed' activeClassName= 'selected'>Completed</NavLink>
        </li>
      </ul>
      <button className='clear-completed' onClick={() => setShowPopup(!showPopup)}> Clear Completed</button>
      { showPopup && (<Popup text='Are You Sure You Want To Delete?' confirm={() => deleteTodo(props.todo)} cancel={() => setShowPopup(!showPopup)} />)}
      {/* Footer buttons/li's need positioning work */}
    </>
  )
}

function mapStateToProps (globalState) {
  return {
    todos: globalState.getTodos
  }
}

export default connect(mapStateToProps)(Footer)
