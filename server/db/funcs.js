const connection = require( './connection' )

function getTodos ( db = connection ){
    console.log(db)
    return db( 'todos' )
    .select()
}

function addTask ( todos, db = connection ){
    return db( 'todos' )
    .insert( todos )
}

function deleteTask ( id, db = connection ){
    return db( 'todos' )
    .delete()
    .where( 'id', id )
}

function updateTask ( id, updateTask,  db = connection ){
    return db( 'todos' )
    .update( updateTask )
    .where( 'id', id )
}



module.exports = {
    getTodos,
    addTask,
    deleteTask,
    updateTask
}