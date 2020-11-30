import React from 'react'
import {connect} from 'react-redux'
import { updateTask} from '../actions'


class EditTask extends React.Component{

  state={
    updatedTask: this.props.taskName
  }

  handleChange = (event)=>{
    this.setState({
      updatedTask:event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()

    const editedTask ={
      id: this.props.task.id,
      task: this.state.updatedTask,
      completed: false
    }
  
    this.props.dispatch(updateTask(editedTask))

    this.props.hideMakeEdit()
  }

  
  
  render(){
    return (
        <>
      <form onSubmit={this.handleSubmit}>
        <input className="new-todo" name="updatedTask" autoFocus={true} value={this.state.updatedTask} onChange={this.handleChange}/>
      </form>
        
        </>
      )
  }

}

function mapStateToProps (globalState) {
  return {
    tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(EditTask)
