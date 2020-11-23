import React, { useState, useEffect } from 'react'
import { deleteTask, fetchTasks, removeTask } from '../actions'
import { connect } from 'react-redux'

    //get tasks from props then filters out task to be deleted by id and dispatches an action with new global state object
function handleDelete (id, props) {
    // const newArr = props.tasks.filter(task => task.id != id)
    props.dispatch(removeTask(id))
}


function Main(props) {

    // const [tasks, setTasks] = useState()

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
                       <input className="toggle" type="checkbox" />
                        <label>{task.task}</label>
                        <button className="destroy" onClick={() =>handleDelete(task.id, props)}></button>
                    </div>
                    <input className="edit" />
                </li> 
               )  
                
             })}
            </ul>
        </>
    )
}

function ms2p(globalState){
    return {
        tasks: globalState.tasks
    }
}

export default connect(ms2p)(Main)



// <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->