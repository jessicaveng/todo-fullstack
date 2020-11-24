import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions'


class AddTodo extends React.Component {

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
    let newTask = {task: this.state.input, done: false}
    this.props.dispatch(addTask(newTask))
    this.setState({input: ''})
  }

  render(){
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input 
          className="new-todo" 
          placeholder="What needs to be done?" 
          autoFocus={true}
          onChange={(event) => this.handleChange(event)}
          value={this.state.input}/>
        </form>
      </header>
    )
  }
}

//adding form around input to capture onsubmit

export default connect()(AddTodo)
