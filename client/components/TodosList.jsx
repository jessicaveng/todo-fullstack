import React from 'react'

import {getTodos} from '../actions/getTodos'

function TodosList(props) {
    return(
      <>
      <ul>
        {props.todos.map(todo => 
        <li key={todo.id}>{todo.todo}</li>
        )}
      </ul>
      
      </>
    )
}
export default TodosList