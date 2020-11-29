const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', (req, res) => {
  return db.getToDo()
    .then(todo => {
      res.json(todo)
    })
})

router.post('/', (req, res) => {
  const newToDo = req.body
  return db.addToDo(newToDo)
    .then(addedToDo => {
      res.json(addedToDo)
    })
})

router.put('/', (req, res) => {
  const newToDo = req.body
  return db.editToDo(newToDo.id, newToDo.text)
    .then(editedToDo => {
      res.json(editedToDo)
    })
})

router.delete('/', (req, res) => {
  const targetToDo = req.body
  return db.deleteToDo(targetToDo.id)
    .then(deletedToDo => {
      res.json(deletedToDo)
    })
})
