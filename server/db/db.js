const connection = require('./connection')

function getTasks(page, db = connection){
    // const pageSize = 30
    return db('todos').select()
    // .orderBy('id', 'desc')
    // .limit(pageSize)
    // .offset(page * pageSize)
}

function deleteTask(id, db = connection){
    return db('todos').delete().where('id', id)
    //delete where done = true
}

function updateTask(id, task, db = connection){
    return db('todos').update(task).where('id', id)
}

function addTask(task, db = connection){
    return db('todos').insert(task)
}

module.exports = {
    getTasks,
    addTask,
    updateTask,
    deleteTask
}