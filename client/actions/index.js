import request from 'superagent'

export const getTasks = tasks => {
    return {
        type: 'GET_TASKS',
        tasks: tasks
    }
}

export const deleteBatch = ids => {
    console.log(ids)
    return dispatch => {
        return request
            .post('/api/v1/todos/deletebatch').send(ids)
            .then(dispatch(batchDeleted(ids)))
            .catch(err => console.log(err))
    }
}

export const batchDeleted = ids => {
    return {
        type: 'BATCH_DELETED',
        ids
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

export const removeTask = (id) => {
    return dispatch => {
        return request  
        .delete('/api/v1/todos/' + id)
        .then(dispatch(taskDeleted(id)))
        .catch(err => console.log(err))
    }
}

export const taskDeleted = id => {
    return {
        type: 'TASK_DELETED',
        id
    }
}

export const addTask = (task) => {
    return dispatch => {
        return request  
        .post('/api/v1/todos').send(task)
        .then((res) => {
            task.id = res.body.id
            dispatch(taskAdded(task))
        })
        .catch(err => console.log(err))
    }
}

export const taskAdded = (task) => {
    return {
        type: 'TASK_ADDED',
        task
    }
}

export const updateTaskStatus = (id, done) => {
    return dispatch => {
        return request  
        .patch('/api/v1/todos/' + id).send({done: done})
        .then(dispatch(statusUpdated(id, done)))
        .catch(err => console.log(err))
    }
}

export const statusUpdated = (id, done) => {
    return {
        type: 'TASK_STATUS_UPDATED',
        id,
        done
    }
}

export const updateTaskDetails = (id, text) => {
    return dispatch => {
        return request  
        .patch('/api/v1/todos/' + id).send({task: text})
        .then(dispatch(taskUpdated(id, text)))
        .catch(err => console.log(err))
    }
}

export const taskUpdated = (id, text) => {
    return {
        type: 'TASK_DETAILS_UPDATED',
        id,
        text
    }
}

