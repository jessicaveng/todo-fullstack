import React from 'react'
import { connect } from 'react-redux'
import { updateTodo } from '../actions/updateTodo'

class EditTodo extends React.Component {
    state = {
      editTodo: this.props.text
    }

    handleChange = (e) => {
      this.setState({ editTodo: e.target.value })
    }

    handleSubmit = (e) => {
      const editedTodo = this.props.todo
      editedTodo.todo = this.state.editTodo
      e.preventDefault()
      this.props.dispatch(updateTodo(editedTodo))
      this.setState({ editTodo: '' })
      this.props.enter()
    }

    render () {
      return (
        <>
          <form onSubmit={this.handleSubmit}>
            <input className='new-todo' name='EditTodo' placeholder={this.props.text} autoFocus={true} value={this.state.editTodo} onChange={this.handleChange} />
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
export default connect(mapStateToProps)(EditTodo)
