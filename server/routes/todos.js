const express = require('express')

const db = require('../db/todos')

const router = express.Router()

// Create Todos
router.post('/', (req, res) => {
  db.addTodo(req.body)
    .then((todo) => {
      res.json({ todo })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Post error, todo not created' })
    })
})

// Read Todos
router.get('/', (req, res) => {
  db.getTodo()
    .then((todos) => {
      res.json(todos)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Get error, todos not got' })
    })
})

// Update Todos
router.patch('/', (req, res) => {
  db.updateTodo(req.body)
    .then((todos) => {
      res.json({ todos })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Patch error, todo not updated' })
    })
})

// Delete Todos
router.delete('/', (req, res) => {
  db.deleteTodo(req.body)
    .then((todos) => {
      res.json({ todos })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Delete error, todo not deleted' })
    })
})

module.exports = router
