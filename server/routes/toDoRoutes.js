const express = require('express')
const router = express.Router()

const {getTodos} = require('../db/db.js')



router.get('/todo', (req, res) => {
    console.log('route')
    getTodos()
        .then(todos => {
            console.log('hello then: ',todos)
            res.json(todos)
            //res.json means stringify the response & put it in JSON format so we can then deal with it this way
        })
        .catch(err => {
            console.log('catch', err)
            res.status(500).json({ message: 'Something broke' })
        })
})





module.exports = router