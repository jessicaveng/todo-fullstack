import React from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import TodosList from './TodosList'

import {getTodos} from '../actions/getTodos'
import {updateDBTodo} from '../actions/addTodo'


class App extends React.Component {
  componentDidMount () {
    // this.props.dispatch(getTodos())
    this.props.dispatch(updateDBTodo({id:2, todo:'run', completed: 1}))
  }

  render () {
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <AddTodo />
        </header>
        <section className="main">
        <TodosList todos={this.props.todos}/>


        </section>
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
