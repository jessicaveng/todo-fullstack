import React from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../actions/addTodo'

class AddTodo extends React.Component {
  state = {
    newTodo: ''
  }

handleChange = (e) => {
  this.setState({ newTodo: e.target.value })
}

handleSubmit = (e) => {
  e.preventDefault()
  this.props.dispatch(createTodo(this.state.newTodo))
  this.setState({ newTodo: '' })
}

render () {
  return (
    <>
      <form onSubmit={this.handleSubmit}>
        <input className="new-todo" name='newTodo' autoFocus={true} value={this.state.newTodo} onChange={this.handleChange} />
      </form>
    </>
  )
}
}

function mapStateToProps (globalState) {
  return {
    todos: globalState.getTodos
  }
}

export default connect(mapStateToProps)(AddTodo)
