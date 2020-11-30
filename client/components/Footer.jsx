import React from 'react'
import { connect } from 'react-redux'

import { deleteCompletedTodos } from '../apis/api'
import { completedTodosDeleted } from '../actions'

import { NavLink } from 'react-router-dom'

class Footer extends React.Component {

  deleteCompletedHandler = () => {
    deleteCompletedTodos()
      .then(() => this.props.dispatch(completedTodosDeleted()))
  }

  render () {
    return (
      <footer className="footer"> 
      {/* This should be `0 items left` by defau */}
    <span className="todo-count"><strong>{this.props.todosLeft}</strong> item left</span>
        {/* Remove this if you don't implement routi */}
        <ul className="filters">
          <li>
            <NavLink exact activeClassName="selected" to="/">All</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="selected" to="/active" >Active</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="selected" to="/completed" >Completed</NavLink>
          </li>
        </ul>
        {/* Hidden if no completed items are left */}
        <button onClick={this.deleteCompletedHandler} className="clear-completed">Clear completed</button>
      </footer>
    )
  }
}

function mapStateToProps (state) {
  const { todos, todosLeft } = state
  return { todos, todosLeft }
}

export default connect(mapStateToProps)(Footer)
