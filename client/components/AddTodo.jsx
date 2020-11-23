import React from 'react'
import { connect } from 'react-redux'
import { postTodo,addTodo } from '../actions'




class  AddTodo extends React.Component {
  state = {
    todo: '',

  }

  handleChange = event => {
    this.setState({
      todo: event.target.value
    })
 }

  handleSubmit = () => {
    this.props.dispatch(postTodo(this.state.todo))
  }

 render(){

    return (
      <>

        <input className="new-todo" placeholder="What needs to be done?" onChange={this.handleChange} autoFocus={true} />
        <button onClick={()=> this.handleSubmit()}>Click me</button>
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
