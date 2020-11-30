import React from 'react'
import { connect } from 'react-redux'


import TodoItem from './TodoItem'



class Main extends React.Component {

  render () {
    return (
      <section className="completed">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.todos.map((item) => {
            if (item.completed) {
              return <TodoItem text={item.text} id={item.id} key={item.id} completed={item.completed}/>
            }
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
