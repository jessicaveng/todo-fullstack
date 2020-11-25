import React from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import TodosList from './TodosList'
import FooterComplete from './Footer'
import ShowAll from './ShowAll'
import { HashRouter as Router } from 'react-router-dom'


import { Link, Route } from 'react-router-dom'

import {getTodos} from '../actions/getTodos'
import {createTodo} from '../actions/addTodo'
import {updateDBTodo} from '../actions/updateTodo'
import {removeTodo} from '../actions/deleteTodo'


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
        <Route exact path='/' component={TodosList}/>
        <Route exact path='/:status' component={TodosList} />
      </section>
      <footer className="footer">
        <FooterComplete />
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
