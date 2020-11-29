import React from 'react'
import {connect} from 'react-redux'
import { fetchActiveTasks, destroyTask, completeTask} from '../actions'
import{Link} from 'react-router-dom'

class Active extends React.Component{

  componentDidMount () {
      this.props.dispatch(fetchActiveTasks())
    }


  handleChange = (task)=>{
    this.props.dispatch(completeTask(task))
    this.props.dispatch(fetchActiveTasks())
  }
  
  handleDestroy = (task)=>{
    this.props.dispatch(destroyTask(task))
    this.props.dispatch(fetchActiveTasks())
  }


  render(){
    return (
        <>
          
          <header className="header">
            <h1>todos</h1>
           
          </header>
          <section className="main">
        
            <ul className="todo-list">
             {this.props.activeTasks.map((task)=>
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
          
            <button className="clear-completed">Clear completed</button>
          </footer>
  
          </section>
          
        </>
      )
  }

}

function mapStateToProps (globalState) {
  return {
    activeTasks: globalState.activeTasks
  }
}

export default connect(mapStateToProps)(Active)
