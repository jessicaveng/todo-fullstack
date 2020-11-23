// import React from 'react'

import { connect } from 'react-redux'
import React from 'react'

import {getTodos} from '../actions/getTodos'
import {updateDBTodo} from '../actions/updateTodo'
import {removeTodo} from '../actions/deleteTodo'

export default connect(mapStateToProps)(TodosList)

function TodosList(props) {

  function updateCompleted(todo){
    todo.completed = todo.completed ? 0 : 1
    props.dispatch(updateDBTodo(todo))
  }
  function deleteTodo(todo){
    props.dispatch()
  }

    return(
      <>
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">

        {props.todos.map(todo => {
          return (
            <li class={todo.completed ? "completed" : ""} key={todo.id}>
            <div class="view">
            <input class="toggle" type="checkbox" id={todo.id} checked={todo.completed} onChange={() => updateCompleted (todo)}/>
            <label>{todo.todo}</label>
            <button class="destroy" onClick></button>
          </div>
          </li>
          )}
        )}
      </ul>
      </>
    )
}

function mapStateToProps (globalState){
  return {
    todos: globalState.getTodos
  }
}
