const express = require('express')


const db = require('../db/todos')

const router = express.Router()


router.get('/', (req,res) => {
  return db.getTodos()
    .then(todo =>{
      res.json(todo)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.post('/', (req,res) => {
  // console.log(req.body)
  return db.addTodos(req.body)
    .then(() => res.json({}) )
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router