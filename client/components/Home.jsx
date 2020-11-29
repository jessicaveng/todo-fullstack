import React from 'react'
import {connect} from 'react-redux'
import{Link} from 'react-router-dom'

import AddTodo from './AddTodo'
import {completeTask, destroyCompletedTasks, destroyTask, fetchActiveTasks, fetchTasks} from '../actions/index'
import Active from './Active'
import Completed from './Completed'

class Home extends React.Component {
  
  
  componentDidMount () {
    this.props.dispatch(fetchTasks())
    this.props.dispatch(fetchActiveTasks())
  }


  handleChange = (task)=>{
    this.props.dispatch(completeTask(task))
    this.props.dispatch(fetchActiveTasks())
  }
  
  handleDestroy = (task)=>{
    this.props.dispatch(destroyTask(task))
  }

  clearCompletedHandler (){
      this.props.dispatch(destroyCompletedTasks ())
      
  }




  render () {
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          
        </header>
        <section className="main">
      
          <ul className="todo-list">
           {this.props.tasks.map((task)=>
              <li key={task.id} className={task.completed == "1" ? 'completed' : ''} >
                <div className="view">
                  <input className="toggle" type="checkbox" onChange={()=>this.handleChange(task)}/>
                  <label>{task.task}</label>
                  <button onClick ={()=>this.handleDestroy(task)} className="destroy"></button>
                </div>
              </li>
           )}
          </ul>

        <footer className="footer">
      
           <span className="todo-count"><strong>{this.props.activeTasks.length}</strong> item left</span>
          
          <ul className="filters">
            <li>
              <Link className="selected" to={'/'}>All</Link>
            </li>
            <li>
              <Link to={'/active'}>Active</Link>
            </li>
            <li>
              <Link to={'/completed'}>Completed</Link>
            </li>
          </ul>
        
          <button onClick ={() =>this.clearCompletedHandler()}className="clear-completed">Clear completed</button>
        </footer>

        </section>
       
      </>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    tasks: globalState.tasks,
    activeTasks: globalState.activeTasks
  }
}

export default connect(mapStateToProps)(Home)
