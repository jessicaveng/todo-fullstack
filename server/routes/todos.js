const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
    return db.getTasks()
        .then(tasks => res.json(tasks))
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'something went wrong'}) 
        })
})

router.post('/', (req,res) => {
    const newTask = req.body
    return db.addTask(newTask)
        .then(() => res.json({}))
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'something went wrong'}) 
    })
})

router.patch('/:id', (req,res) => {
    const id = req.params.id
    const newTask = req.body
    return db.updateTask(id, newTask)
    .then(() => res.json({}))
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'something went wrong'}) 
    })
})

router.delete('/:id', (req,res) => {
    const id = req.params.id
    return db.deleteTask(id)
    .then(() => res.json({}))
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'something went wrong'}) 
    })
})



module.exports = router