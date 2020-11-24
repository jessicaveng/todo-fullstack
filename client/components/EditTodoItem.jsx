import React from 'react'
import { connect } from 'react-redux'
import {updateDBTodo} from '../actions/updateTodo'



class EditTodoItem extends React.Component{
  state={
    editTodo:this.props.text
  }

  handleChange = (event) => {
    this.setState({editTodo:event.target.value})
  }

  handleSubmit = (event) => {
    let editedTodo =this.props.todo
    editedTodo.todo = this.state.editTodo
    event.preventDefault()
    this.props.dispatch(updateDBTodo(editedTodo))
    this.setState({editTodo:''})
    this.props.enter()
  }
  
  render(){
    return(
      <>
      <form onSubmit={this.handleSubmit}>
        <input className="new-todo" name="editTodo" placeholder={this.props.text} autoFocus={true} value={this.state.editTodo} onChange={this.handleChange}/>
      </form>
        
      </>
    )
  }
}

function mapStateToProps (globalState){
  return {
    todos: globalState.getTodos
  }
}
export default connect(mapStateToProps)(EditTodoItem)