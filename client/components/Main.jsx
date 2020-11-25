import React from 'react'
import { connect } from 'react-redux'

import { getTodos } from '../apis/api'
import { addTodo } from '../actions'

import TodoItem from './TodoItem'



class Main extends React.Component {

  componentDidMount = () => {
    getTodos()
      .then((items) => {
        items.map((item) => {
          this.props.dispatch(addTodo(item.id, item.text, item.completed))
        })
      })
  }



  render () {
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.todos.map((item) => {
            return <TodoItem text={item.text} id={item.id} key={item.id} completed={item.completed}/>
          })} 
        </ul>
      </section>
    )
  }
}

function mapStateToProps (state) {
  const { todos } = state
  return { todos: todos }
}

export default connect(mapStateToProps)(Main)
