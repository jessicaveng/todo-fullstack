import React from 'react'

import { connect } from 'react-redux'
import { eventNames } from 'superagent'

import { toggleCompletedTodo, deleteTodo, updateTodo } from '../actions'

import { updateTodo as updateTodoDb, deleteTodo as deleteTodoDb } from '../apis/api'

class TodoItem extends React.Component {

  state = {
    className: this.props.completed ? "completed" : "",
    text: ""
  }

  componentDidMount = () => {
    this.setState({
      text: this.props.text
    })
  }

  checkHandler = (evt) => {
    evt.persist()
    
    updateTodoDb(this.props.id, this.props.text, evt.target.checked)
    .then(() => {
      this.props.dispatch(toggleCompletedTodo(this.props.id))
      this.setState({
        className: evt.target.checked ? "completed" : "" 
      })
    })
  }

  deleteHandler = () => {
    deleteTodoDb(this.props.id)
      .then(() => this.props.dispatch(deleteTodo(this.props.id)))
  }

  doubleClickHandler = () => {
    this.setState({
      className: "editing",
    })
  }

  updateChangeHandler = (evt) => {
    this.setState({
      text: evt.target.value
    })
  }

  finishEditingHandler = (evt) => {
    if (evt.keyCode == 13 ) {
      this.setState({
        className: this.props.completed ? "completed" : "",
      })

      updateTodoDb(this.props.id, this.state.text, this.props.completed)
        .then(
          this.props.dispatch(updateTodo(this.props.id, this.state.text))
        )
    }
  }

  render () {
    return (
      <li className={this.state.className} key={this.props.id}>
        <div className="view">
          <input onChange={(e) => this.checkHandler(e)} className="toggle" type="checkbox" checked={this.props.completed}/>
          <label onDoubleClick={(this.doubleClickHandler)} > {this.props.text} </label>
          <button onClick={this.deleteHandler} className="destroy">
          </button>
        </div>
        <input onChange={(evt) => this.updateChangeHandler(evt)} onKeyDown={(evt) => this.finishEditingHandler(evt)} onSubmit={this.finishEditingHandler} className="edit" value={this.state.text} />
      </li>
    )
  }
}

function mapStateToProps (state) {
  const { todos } = state
  return { todos: todos }
}

export default connect(mapStateToProps)(TodoItem)
