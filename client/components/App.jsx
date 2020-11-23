import React from 'react'
import { connect } from 'react-redux'


import AddTodo from './AddTodo'
import ShowToDo from './ShowToDo'
import {getTodos} from '../actions'

class App extends React.Component {

  componentDidMount(){
    this.props.dispatch(getTodos())
  }

  render () {
    return (
      <>
      
        <header className="header">
          <h1>todos</h1>
          <AddTodo />
        </header>
        <ShowToDo/>
        <section className="main">

        </section>

        <footer className="footer"></footer>
 
      </>
    )
  }
}


function mapStateToProps (globalState) {
  return {
    todoList: globalState.TodoList,
  }
}
export default connect(mapStateToProps)(App)
