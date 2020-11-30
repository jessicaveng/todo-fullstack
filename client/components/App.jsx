import React from 'react'

import {getToDo, deleteToDo, editToDo, addToDo } from '../apis/api'

class App extends React.Component {

  state = {
    todos: [],
    input: '',
    newOne: ''
  }

  componentDidMount = () => {
      getToDo()
      .then(todos => {
        this.setState({
          todos: todos
        })
      })
    }

    handleClick = (event) => {
      const num = parseInt(event.target.id)
      deleteToDo(num)
      
      getToDo()
      .then(todos => {
        this.setState({
          todos: todos
        })
      })
    }

    handleAddChange = (event) => {
      this.setState({
        newOne: event.target.value
      })
    }

    handleChange = (event) => {
      this.setState({
        input: event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      editToDo(event.target.id, this.state.input)
      getToDo()
      .then(todos => {
        this.setState({
          todos: todos
        })
      })
      this.setState({
        input: ""
      })
    }

    handleAdd = (event) => {
      event.preventDefault()
      addToDo(this.state.newOne)
      getToDo()
      .then(todos => {
        this.setState({
          todos: todos
        })
      })
      this.setState({
        newOne: ""
      })
    }

  render () {
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} onChange={this.handleAddChange} value={this.state.newOne}/>
          <button onClick={this.handleAdd}>Add</button>
        </header>
        
        <section className="main">
          <ul className="todo-list">
            {
              this.state.todos.map(item => {
                return <li className="completed" key={item.id}>
                  <p>{item.text}</p>
                  <button className="destroy" id={item.id} onClick={this.handleClick}></button>
                  <input type="text" onChange={this.handleChange}/>
                  <button id={item.id} onClick={this.handleSubmit}>Edit</button>
                </li>
              })
            }
          </ul>
        </section>
        <footer className="footer"></footer>
      </>
    )
  }
}

export default App
