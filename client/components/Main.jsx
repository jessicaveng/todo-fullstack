import React from "react";
import { connect } from "react-redux";
import { fetchapis } from "../actions/listTask";
// import { Link, Route } from "react-router-dom";
// import Task from "../../server/db/task";

import { deltaskfun } from "../actions/listTask";
import { updatetaskfun } from "../actions/listTask"



class Main extends React.Component {
componentDidMount = () => { this.props.dispatch(fetchapis()).then((Task) => {})
}

state = {
  editcurrent: null,
  writeUpdate: null,
}

handleonClick = (id) =>{
  this.setState({editcurrent: id }
    )
  }

changeClassName = (editTaskID) => {
// console.log(editTaskID === this.state.editcurrent )
if (editTaskID === this.state.editcurrent){
  return 'editing'
} else {
  return 'view'
}
}

// 1. type and update state
// 2. Hit Enter & and handleUpdate

// Enter = 13

updateValue = (value) =>{
this.setState({writeUpdate: value}
  )
}

handleUpdate = (e) =>{
  if (e.key === 'Enter'){
  return (this.props.dispatch(updatetaskfun(this.state)))
  }
}





// Onclick
// Summit on Enter



handleDel = (id) =>{
  console.log('initiate with ', id)
this.props.dispatch(deltaskfun(id))
}


render (){ return (
   <section className="main">
    {/* <input id="toggle-all" class="toggle-all" type="checkbox" /> */}

    {/* <label for="toggle-all">Mark all as complete</label> */}
    <ul className="todo-list">

            
            {this.props.task.map(task => {
              return <li onDoubleClick = { () => this.handleonClick(task.id)} className ={this.changeClassName(task.id)} 
              >  
          <div className="view">
                
              <input className="toggle" type="checkbox"  /> 
              <label>
                {task.taskDetails}
              </label> 
            
              <button onClick = {()=>this.handleDel(task.id)} class="destroy"></button>
              </div>
              <input 
              type = 'text'              
              className="edit"
              value = {this.state.writeUpdate}
              onChange={(e) => this.updateValue(e.target.value)} 
              onKeyDown={(e) => this.handleUpdate(e)}
              // onKeyDown = { () => this.handleKeyDown(task.id)}
              />
              </li>
            })} 

    </ul>
  </section>
 
      )
    }
  }



function mapStateToProps(globalState) {
  return {
    task: globalState.listTask
  };
}




export default connect(mapStateToProps)(Main);