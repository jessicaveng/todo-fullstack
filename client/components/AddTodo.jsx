import React from 'react'

import { todoAdded } from '../actions'
import { addTodo as addTodoDb} from '../apis/api'
import { connect } from 'react-redux'

class AddTodo extends React.Component {

  state = {
    newTodo: ""
  }

  changeHandler = (e) => {
    this.setState({
      newTodo: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()

    addTodoDb(this.state.newTodo)
    .then((idObj) => {
      this.props.dispatch(todoAdded(idObj.id, this.state.newTodo, false))
      this.setState({ newTodo: "" })
    })
    
  }

  render () {
    return (
      <>
        <form onSubmit={(e) => this.submitHandler(e)}>
          <input value={this.state.newTodo} onChange={this.changeHandler} className="new-todo" placeholder="What needs to be done?" autoFocus={true} />
        </form>
      </>
    )
  }
}

function mapStateToProps (state) {
  const { todos } = state
  return { todos: todos }
}

export default connect(mapStateToProps)(AddTodo)
