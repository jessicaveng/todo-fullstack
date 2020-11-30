import React from 'react'
import { connect } from 'react-redux'

import { getTodos } from '../actions/getTodos'
import { removeTodo } from '../actions/deleteTodo'

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

class ShowAll extends React.Component {
  componentDidMount () {
    this.props.dispatch(getTodos())
    this.props.dispatch(removeTodo({ id: 10, todo: 'clean', completed: 0 }))
  }

  render () {
    return (
      <>
        <header className='header'>
          <h1>Todo</h1>
          <AddTodo />
        </header>
        <section className='main'>
          <TodoList />
        </section>
        <footer className='footer'>
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
export default connect(mapStateToProps)(ShowAll)
