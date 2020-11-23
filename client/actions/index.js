import request from 'superagent'

export const getTasks = tasks => {
    return {
        type: 'GET_TASKS',
        tasks: tasks
    }
}

export const fetchTasks = () => {
    return dispatch => {
        return request  
        .get('/api/v1/todos')
        .then(response => dispatch(getTasks(response.body)))
        .catch(err => console.log(err))
    }
}