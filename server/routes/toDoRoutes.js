const express = require('express')
const db = require('../db/db')
const { response } = require('../server')
const router = express.Router()

router.get('/', (req, res) => {
  return db.getToDo()
    .then(todo => {
      res.json(todo)
    })
    .catch(err => console.log(err))
})

router.post('/', (req, res) => {
  const newToDo = req.body
  return db.addToDo(newToDo)
    .then(addedToDo => {
      res.json(addedToDo)
    })
    .catch(err => console.log(err))
})

router.patch('/', (req, res) => {
  console.log(req.body)
  const newToDo = req.body
  
  return db.editToDo(newToDo.id, newToDo)
    .then(editedToDo => {
      res.json(editedToDo)
    })
    .catch(err => console.log(err))
})

router.delete('/delete', (req, res) => {
  
  return db.deleteToDo(req.body.id)
    .then(response => {
      res.json(response)
    })
    .catch(err => console.log(err))
})

module.exports = router