const express = require( 'express' )
const db = require( '../db/funcs')
const router = express.Router()

router.get( '/', ( req, res ) => {

    return db.getTodos()
    .then( todo => {
        res.json( todo )
    })

    .catch( err => {
        console.log( err )
        res.status( 500 ).json({ message: 'BROKEN GET!' })
    })
})

router.post( '/', ( req, res ) => {

    const task = req.body

    return db.addTask( task )
    .then( newTodo => {
        res.json( newTodo )
    })

    .catch( err => {
        console.log( err )
        res.status( 500 ).json({ message: 'BROKEN POST!' })
    })
})

router.put( '/', (req, res ) => {

    const task = req.body

    return db.updateTask( task.id, task )
    .then( updateTodo => {
        res.json( updateTodo )
    })

    .catch( err => {
        console.log( err )
        res.status( 500 ).json({ message: 'BROKEN PUT!'})
    })
})

router.delete( '/:id', ( req, res) => {

    return db.deleteTask(req.params.id)
    .then( deleteTodo => {
        res.json( deleteTodo )
    })

    .catch( err => {
        console.log( err )
        res.status( 500 ).json({ message: 'BROKEN DELETE!'})
    })
})

module.exports = router