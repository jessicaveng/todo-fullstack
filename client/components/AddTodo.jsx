import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addtaskapis } from '../actions/listTask'



class addTask extends React.Component {

  state = {
    input: ''
  }

  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    let addTask = {taskDetails: this.state.input, Completed: false}

    this.props.dispatch(addtaskapis(addTask))
    this.setState({input: ''})
  }

  render(){
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input 
        className="new-todo" 
        placeholder="What needs to be done?" 
        autoFocus={true}
        onChange={(event) => this.handleChange(event)}
        value={this.state.input}/>
      </form>
    )
  }
}

//adding form around input to capture onsubmit

export default connect()(addTask)

