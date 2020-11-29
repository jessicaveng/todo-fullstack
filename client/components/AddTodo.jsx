import React from 'react'
import {connect} from 'react-redux'
import { addNewTask } from '../actions'


class AddTodo extends React.Component{

  state={
    newTask: ''
  }

  handleChange = (event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit = (event) =>{
    console.log(this.state.newTask)
    event.preventDefault()
    this.props.dispatch(addNewTask(this.state.newTask))
    this.setState({newTask: ""})
  }

  render(){
    return (
      <>
       <form  onSubmit={this.handleSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" value={this.state.newTask} autoFocus={true} name='newTask' onChange={this.handleChange}/>
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

export default connect(mapStateToProps)(AddTodo)
