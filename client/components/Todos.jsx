import React from 'react'
import { connect } from 'react-redux'
import { getTasks, destroyTask } from '../actions'

function didComplete(id, props){
    let completeTask = props.task.find( task => {
        if (task.id == id){
            if(task.completed){
                task.completed = true
            } else {
                task.completed = false
            } return task
        }
    })
}

class ShowTasks extends React.Component {

    componentDidMount(){
        this.props.dispatch(getTasks())
    }

    render() {
        return (
            <>
                <section className="main">
                    <input id="toggle-all" className="toggle-all" type="checkbox" />
                    <label htmlFor="toggle-all">Mark all as complete</label>
                    <ul className="todo-list">
                        {this.props.setTasks.map((task) => {
                            return (
                                <li key={task.id}>
                                    <div className="view">

                                        <input 
                                        className="toggle" 
                                        type="checkbox"
                                        onClick={ () => didComplete( task.id, props )} />

                                        <label>{task.task}</label>

                                        <button 
                                        className="destroy"
                                        onClick={ () => this.props.dispatch(destroyTask( task.id ))}></button>
                                    </div>
                                    <input className="edit" value="Rule the web" />
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </>
        )
    }
}

function mapStateToProps( globalState ) {
    return {
        setTasks: globalState.setTasks
    }
}

export default connect(mapStateToProps)(ShowTasks)