import React from 'react'

import { connect } from 'react-redux'

import { toggleCompletedTodo, deleteTodo } from '../actions'

import { updateTodo as updateTodoDb, deleteTodo as deleteTodoDb } from '../apis/api'

class TodoItem extends React.Component {

  state = {
    className: this.props.completed ? "completed" : ""
  }

  checkHandler = (e, id) => {
    this.setState({
      className: e.target.checked ? "completed" : "" 
    })

    this.props.dispatch(toggleCompletedTodo(id))
    updateTodoDb(id, this.props.text, e.target.checked)
  }

  deleteHandler = () => {
    deleteTodoDb(this.props.id)
      .then(() => this.props.dispatch(deleteTodo(this.props.id)))
    
  }

  render () {
    return (
      <li className={this.state.className} key={this.props.id}>
        <div className="view">
          <input onChange={(e) => this.checkHandler(e, this.props.id)} className="toggle" type="checkbox" checked={this.props.completed}/>
          <label> {this.props.text}</label>
          <button onClick={this.deleteHandler} className="destroy"></button>
        </div>
        {/* <input className="edit" value="Create a TodoMVC template" /> */}
      </li>
    )
  }
}

function mapStateToProps (state) {
  const { todos } = state
  return { todos: todos }
}

export default connect(mapStateToProps)(TodoItem)
