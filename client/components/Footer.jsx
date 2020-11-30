import React from 'react'
import {connect} from 'react-redux'
import { fetchActiveTasks, destroyCompletedTasks} from '../actions'
import{Link} from 'react-router-dom'

class Active extends React.Component{

  componentDidMount () {
      this.props.dispatch(fetchActiveTasks())
    }

  // componentDidUpdate (){
  //   this.props.dispatch(fetchActiveTasks())
  // }

  clearCompletedHandler (){
    this.props.dispatch(destroyCompletedTasks ())
  }


  render(){
    return (
        <>
          
       
  
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
          
            <button onClick ={() =>this.clearCompletedHandler()} className="clear-completed">Clear completed</button>
          </footer>

        
          
        </>
      )
  }

}

function mapStateToProps (globalState) {
  return {
    activeTasks: globalState.activeTasks,
    tasks:globalState.tasks
  }
}

export default connect(mapStateToProps)(Active)
