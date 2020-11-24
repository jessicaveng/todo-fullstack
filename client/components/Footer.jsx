import React from 'react'
import { connect } from 'react-redux'
import { activePage } from '../actions'

function Footer (props) {

  function getCompletLength(){ 
    return props.todoList.filter(todo =>todo.completed == false).length
  }

  // function getCompleted(){
  //   console.log(props.todoList.filter(todo =>todo.completed == true))
  //   return props.todoList.filter(todo =>todo.completed == true)[0]
  // }
  // function getActive(){
  //   console.log(props.todoList.filter(todo =>todo.completed == false))
  //   return props.todoList.filter(todo =>todo.completed == false)[0]
  // }


  const goToNewPage = (page)=>{
    props.dispatch(activePage(page))
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
      </>
    )

}


function mapStateToProps (globalState) {
  return {
    todoList: globalState.todoList,
  }
}
export default connect(mapStateToProps)(Footer)