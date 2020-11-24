import React from 'react'
import { connect } from 'react-redux'
import { postTodo} from '../actions'




class  AddTodo extends React.Component {
  state = {
    todo: '',

  }

  handleChange = event => {
    this.setState({
      todo: event.target.value
    })
 }

  handleSubmit = (e) => {
    this.props.dispatch(postTodo(this.state.todo))
  }
  handleKeyDown = function (e, cb) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleSubmit()
    }
  };

 render(){
    return (
      <>
      <form  onKeyDown={e => this.handleKeyDown(e)}>
        <input className="new-todo" placeholder="What needs to be done?" onChange={this.handleChange} autoFocus={true} />
      </form>
      </>
    )
  }

}



function mapStateToProps (globalState) {
  return {
    todoList: globalState.todoList,
    id: globalState.todoList,
    completed: globalState.completed

  }
}
export default connect(mapStateToProps)(AddTodo)
