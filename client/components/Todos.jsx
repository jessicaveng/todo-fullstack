import React from 'react'
import { connect } from 'react-redux'
import { getTasks, destroyTask, toggleTask } from '../actions'


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
                              console.log(task)
                            return (
                              
                                <li className={task.completed ? 'completed' : ''} key={task.id}>
                                    <div className="view">
                                        <input 
                                        className="toggle" 
                                        type="checkbox"
                                        onClick={ () => this.props.dispatch(toggleTask(task))}
                                        />
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