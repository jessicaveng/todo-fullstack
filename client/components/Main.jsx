import React, { useEffect } from 'react'
import { fetchTasks, removeTask, updateTask } from '../actions'
import { connect } from 'react-redux'

function toggle(id, props) {
    let updatedTask = props.tasks.find(task => {
        if (task.id == id) {
            task.done ? task.done = 0 : task.done = 1
            return task
        }
    })
    props.dispatch(updateTask(updatedTask.id, updatedTask.done))
}

function Main(props) {

    useEffect(() => {
        props.dispatch(fetchTasks())
    }, [])

    return (

        <>
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {props.tasks.map((task, key) => {
                    return (
                        <li className={task.done ? "completed" : "view"} key={key}>
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
                            <input className="edit" />
                        </li>
                    )

                })}
            </ul>
        </>
    )
}

function ms2p(globalState) {
    return {
        tasks: globalState.tasks
    }
}

export default connect(ms2p)(Main)



// <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->