import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom";
import { deleteBatch } from '../actions';

const deleteCompleted = (props) => {
  const idsToDelete = []
  props.tasks.forEach(task => {
    task.done && idsToDelete.push(task.id) 
  })
  console.log(idsToDelete)
  props.dispatch(deleteBatch(idsToDelete)) 
}

function Footer (props) {

    return (
        <footer className="footer">

        <span className="todo-count"><strong>{props.tasks.length}</strong> item{(props.tasks.length !== 1) && 's'} left</span>

        <ul className="filters">
          <li>
            <NavLink to="/" activeClassName="selected">All</NavLink>
          </li>
          <li>
            <NavLink to="/active" activeClassName="selected">Active</NavLink>
          </li>
          <li>
            <NavLink to="/completed" activeClassName="selected">Completed</NavLink>
          </li>
        </ul>
        {(props.tasks.find(task => task.done == 1)) && <button className="clear-completed" onClick={() => deleteCompleted(props)}>Clear completed</button> }
      </footer>
    )
}

function ms2p(globalState) {
    return {
        tasks: globalState.tasks
    }
}


export default connect(ms2p)(Footer)