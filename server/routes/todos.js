const express = require('express')

const db = require('../db/todos')

const router = express.Router()

//Create

router.post('/', (req,res)=> {
  db.addTodo(req.body)
  .then((results)=>{
    res.json({results})
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ message: 'Oh no post error, todo not created' });
  })
})

//Read

router.get('/', (req,res) => {
  db.getTodo()
  .then((results) => {
    res.json({results})
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ message: 'Oh no get error, todos not read from table' });
  })
})

//Update

router.patch('/', (req,res) => {
  db.updateTodo(req.body)
  .then((results) => {
    res.json({results})
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ message: 'Oh no patch error, todo not updated' });
  })
})

router.delete('/', (req,res) => {
  db.deleteTodo(req.body)
  .then((results) => {
    res.json({results})
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ message: 'Oh no delete error, todo not deleted' });
  })

})

//Delete


module.exports = router;
