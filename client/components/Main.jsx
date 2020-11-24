import React, { useEffect, useState } from 'react'
import { fetchTasks, removeTask, updateTaskDetails, updateTaskStatus } from '../actions'
import { connect } from 'react-redux'

function toggle(id, props) {
    let updatedTask = props.tasks.find(task => {
        if (task.id == id) {
            if(task.done){
                task.done = 0
            } else {
                task.done = 1
            }
            return task
        }
    })
    // props.dispatch(toggleClass())
    props.dispatch(updateTaskStatus(updatedTask.id, updatedTask.done))
   
}


function Main(props) {

    const [editing, setEditing] = useState(null)

    const [input, setInput] = useState('')

    // state = {
    //     editing: 21
    // }
    // const setEditing = (value) => {
    //     this.setState({
    //         editing: value
    //     })
    // }

    useEffect(() => {
        props.dispatch(fetchTasks())
    }, [])

    const getClassName = task => {
        if(task.id == editing){
            return 'editing'
        }
        return task.done ? "completed" : "view"
    }

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event, id) => {
        event.preventDefault()
      
        props.dispatch(updateTaskDetails(id, input))
        setEditing(null)
    }

    return (

        <>
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {props.tasks.map((task, key) => {
                    return (
                        <li 
                        className={getClassName(task)}
                        // {task.done ? "completed" : "view"} 
                        // {props.liClassName}
                        key={key}
                        onDoubleClick={() => {
                            setEditing(task.id)
                            setInput(task.task)
                        }}
                        >
                            <div className="view">
                                <input
                                    className="toggle"
                                    type="checkbox"
                                    onClick={() => toggle(task.id, props)}
                                    defaultChecked={task.done ? 'checked' : ''}
                                />
                                <label>{task.task}</label>
                                <button
                                    className="destroy"
                                    onClick={() => props.dispatch(removeTask(task.id))}>
                                </button>
                            </div>
                            <form onSubmit={(event) => handleSubmit(event, task.id)}>
                                <input 
                                className="edit" 
                                value={input} 
                                onChange={(event) => handleChange(event)}/>
                            </form>
                            
                        </li>
                    )

                })}
            </ul>
        </>
    )
}

function ms2p(globalState) {
    return {
        tasks: globalState.tasks,
        liClassName: globalState.liClassName
    }
}

export default connect(ms2p)(Main)

// {task.done ? "completed" : "view"} 

// <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->