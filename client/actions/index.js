import request from 'superagent'

export const getTasks = tasks => {
    return {
        type: 'GET_TASKS',
        tasks: tasks
    }
}

// export const deleteTask = id => {
//     return {
//         type: 'DEL_TASK',
//         id: id
//     }
// }


export const fetchTasks = () => {
    return dispatch => {
        return request  
        .get('/api/v1/todos')
        .then(response => dispatch(getTasks(response.body)))
        .catch(err => console.log(err))
    }
}

//instead of doing front end and then db delete, just do DB delete, then dispatch fetch tasks which re-fetches all tasks and re renders front end to reflect the DB. Do this if there is no performance issue which requires separating the UI from the API calls.

export const removeTask = (id) => {
    return dispatch => {
        // dispatch(deleteTask(id))
        return request  
        .delete('/api/v1/todos/' + id)
        .then(() => dispatch(fetchTasks()))
        .catch(err => console.log(err))
    }
}

export const addTask = (task) => {
    return dispatch => {
        return request  
        .post('/api/v1/todos').send(task)
        .then(() => dispatch(fetchTasks()))
        .catch(err => console.log(err))
    }
}