import React from 'react'
import { connect } from 'react-redux'

import { activePage, deleteCompleted } from '../actions'

function Footer (props) {

  const getCompletLength=()=>{ 
    return props.todoList.filter(todo =>todo.completed == false).length
  }
  
  const goToNewPage = (page)=>{
    props.dispatch(activePage(page))
  }
  const removeCompleted =()=>{
    props.dispatch(deleteCompleted(props.todoList))
  }
    return (
      <>
       <span className="todo-count"><strong>{getCompletLength()}</strong> item left</span>
           <ul className="filters">
          <li>
            <a className="selected" onClick={()=> goToNewPage('showAll')} >All</a>
          </li>
          <li>
            <a  onClick={()=> goToNewPage('active')}>Active</a>
          </li>
          <li>
            <a onClick={()=> goToNewPage('completed')}>Completed</a>
          </li>
        </ul>
        <button className="clear-completed" onClick={()=> removeCompleted()}>Clear completed</button>
      </>
    )

}


function mapStateToProps (globalState) {
  return {
    todoList: globalState.todoList,
  }
}
export default connect(mapStateToProps)(Footer)