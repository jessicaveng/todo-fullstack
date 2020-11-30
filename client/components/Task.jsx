import React from 'react'
import { connect } from 'react-redux'


import { completeTask, destroyCompletedTasks, destroyTask, fetchActiveTasks, fetchTasks } from '../actions/index'
import EditTask from './EditTask'


class Task extends React.Component{

  state={
    editIsVisible: false 
  }


  handleChange = (task) => {
    this.props.dispatch(completeTask(task))
  }

   handleDestroy=(task) =>{
    this.props.dispatch(destroyTask(task))
  }

  makeEditVisible = ()=>{
    this.setState({
      editIsVisible:true
    })
  }

  hideMakeEdit = ()=>{
    this.setState({
      editIsVisible:false
    })
  }


  render(){

    return (
      <>
        <li key={this.props.task.id} className={this.props.task.completed == "1" ? 'completed' : ''} >
          <div className="view">
            <input className="toggle" type="checkbox" onChange={() => this.handleChange(this.props.task)} />
            {this.state.editIsVisible ? <EditTask hideMakeEdit={this.hideMakeEdit} task={this.props.task} taskName={this.props.task.task}/> : <label onDoubleClick={()=>this.makeEditVisible()}>{this.props.task.task}</label>  }
           
            <button onClick={() => this.handleDestroy(this.props.task)} className="destroy"></button>
          </div>
        </li>
  
      </>
    )
  }
  
}

function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks,
    activeTasks: globalState.activeTasks
  }
}

export default connect(mapStateToProps)(Task)
