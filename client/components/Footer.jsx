import React from 'react'
import { connect } from 'react-redux'

import { batchDeleteTodos } from '../apis/api'
import { completedTodosDeleted } from '../actions'

class Footer extends React.Component {

  batchDeleteHandler = () => {
    let idArr = []
    this.props.todos.map((item) => {
      if (item.completed) {
        idArr.push(item.id)
      } 
    })
    batchDeleteTodos(idArr)
      .then(() => this.props.dispatch(completedTodosDeleted(idArr)))
  }

  render () {
    return (
      <footer className="footer"> 
      {/* This should be `0 items left` by defau */}
    <span className="todo-count"><strong>{this.props.todosLeft}</strong> item left</span>
        {/* Remove this if you don't implement routi */}
        <ul className="filters">
          <li>
            <a className="selected" href="#/">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        {/* Hidden if no completed items are left */}
        <button onClick={this.batchDeleteHandler} className="clear-completed">Clear completed</button>
      </footer>
    )
  }
}

function mapStateToProps (state) {
  const { todos, todosLeft } = state
  return { todos, todosLeft }
}

export default connect(mapStateToProps)(Footer)
