import React from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import TodosList from './TodosList'

import {getTodos} from '../actions/getTodos'


class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(getTodos())
  }

  render () {
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <AddTodo />
        </header>
        <TodosList todos={this.props.todos}/>
        <section className="main"></section>
        <footer className="footer"></footer>
      </>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    todos: globalState.getTodos
  }
}

export default connect(mapStateToProps)(App)
