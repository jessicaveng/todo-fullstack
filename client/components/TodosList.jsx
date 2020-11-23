import React from 'react'

import {getTodos} from '../actions/getTodos'

function TodosList(props) {
    return(
      <>
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">

        {props.todos.map(todo => {
          return (<li key={todo.id}><div class="view">
          <input class="toggle" type="checkbox" checked />
          <label>{todo.todo}</label>
          <button class="destroy"></button>
        </div></li>
          )}
        )}

      </ul>
      
      </>
    )
}
export default TodosList