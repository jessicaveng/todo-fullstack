import React from 'react'
import { connect } from 'react-redux'
import {createTodo} from '../actions/addTodo'


class AddTodo extends React.Component {
  state={
    newTodo:""
  }
  
  
  handleChange = (event) => {
    this.setState({newTodo:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch(createTodo(this.state.newTodo))
    this.setState({newTodo:''})
  }

  render(){
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input className="new-todo" name="newTodo" placeholder="What needs to be done?" autoFocus={true} value={this.state.newTodo} onChange={this.handleChange}/>
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
export default connect(mapStateToProps)(AddTodo)

// export default AddTodo
