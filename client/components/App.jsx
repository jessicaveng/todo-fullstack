import React from 'react'

import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import AddTodo from './AddTodo'
import Main from './Main'
import Active from './Active'
import Completed from './Completed'
import Footer from './Footer'

import { getTodos } from '../apis/api'
import { todoAdded, updateTodosLeft } from '../actions'

class App extends React.Component {


  componentDidMount = () => {
    getTodos()
      .then((items) => {
        items.map((item) => {
          this.props.dispatch(todoAdded(item.id, item.text, item.completed))
        })
      })
  }

  componentDidUpdate = () => {
    this.props.dispatch(updateTodosLeft(this.props.todos))
  }

  render () {
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <AddTodo />
        </header>

        <Route exact path ='/' component={Main}/>
        <Route exact path ='/active' component={Active}/>
        <Route exact path ='/completed' component={Completed}/> 

        <Footer /> 
      </>
    )
  }
}

function mapStateToProps (state) {
  const { todos } = state
  return { todos: todos }
}

export default connect(mapStateToProps)(App) 
