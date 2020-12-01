import React from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

import { Route } from 'react-router-dom'

import { getTodos } from '../actions/getTodos'

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
        <section className="main">
          <Route exact path ='/' component={TodoList} />
          <Route exact path ='/:status' component={TodoList} />
        </section>
        <footer className="footer">
          <Footer />
        </footer>
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
