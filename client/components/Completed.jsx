import React from 'react'
import {connect} from 'react-redux'
import { fetchCompletedTasks, destroyTask, completeTask } from '../actions'


class Completed extends React.Component{


  componentDidMount () {
      this.props.dispatch(fetchCompletedTasks())
    }


  handleChange = (task)=>{
    this.props.dispatch(completeTask(task)
    )}
  
  handleDestroy = (task)=>{
    this.props.dispatch(destroyTask(task))
  }

  
  render(){
    return (
        <>
          <header className="header">
            <h1>todos</h1>
           
          </header>
          <section className="main">
        
            <ul className="todo-list">
             {this.props.completedTasks.map((task)=>
                <li key={task.id} className={task.completed == "1" ? 'completed' : ''} >
                  <div className="view">
                    <input className="toggle" type="checkbox" onChange={()=>this.handleChange(task)}/>
                    <label>{task.task}</label>
                    <button onClick ={()=>this.handleDestroy(task)} className="destroy"></button>
                  </div>
                </li>
             )}
            </ul>
          </section>
        </>
      )


  }

}

function mapStateToProps (globalState) {
  return {
    completedTasks: globalState.completedTasks
  }
}

export default connect(mapStateToProps)(Completed)
