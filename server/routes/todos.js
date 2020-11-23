const express = require('express')
const router = express.Router()

const db = require('../db/db')

function logErr(err) {
  console.log('ERROR FUNCTINO WRKLING')
  console.log(err)
  res.status(500).json({ message: 'Somthing went wrong' })
}


router.post('/', (req, res) => {
  return db.addTodo(req.body)
    .then(() => res.json({}))
    .catch(err => logErr(err))
})

router.get('/', (req, res) => {
  return db.getTodos()
    .then((todos) => {
      console.log(todos)
      res.json(todos)
    })
    .catch(err => logErr(err))
})

router.patch('/', (req, res) => {
  return db.updateTodo(req.body.id, req.body.newText)
    .then((todos) => {
      console.log(todos)
      res.json(todos)
    })
    .catch(err => logErr(err))
})

router.delete('/', (req, res) => {
  console.log(req.body.id);
  return db.deleteTodo(req.body.id)
    .then((response) => {
      console.log(response)
      res.json(response)
    })
    .catch(err => logErr(err))
})



module.exports = router
