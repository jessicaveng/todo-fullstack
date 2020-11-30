const express = require('express')
const db = require('../db/todo')
const router = express.Router()


router.get('/', (req,res) =>{
  db.getAllTasks()
    .then(tasks =>{
      res.json(tasks)
    })
    .catch((err)=>{
      console.log(err)
      res.status(500).json({message:'something went wrong'})
    })

})

router.get('/active', (req, res)=>{
  db.getActiveTasks()
  .then(tasks =>{
    res.json(tasks)
  })
  .catch((err)=>{
    console.log(err)
    res.status(500).json({message:'something went wrong'})
  })
})


router.get('/completed', (req,res)=>{
  db.getCompletedTasks()
  .then(tasks =>{
    res.json(tasks)
  })
  .catch((err)=>{
    console.log(err)
    res.status(500).json({message:'something went wrong'})
  })
})


router.post('/', (req,res)=>{
  const newTask = req.body
  db.addTask(newTask)
    .then(id=>{
      newTask.id = id[0]
      res.json(newTask)
    })
    .catch((err)=>{
      console.log(err)
      res.status(500).json({message:'something went wrong'})
    })
})


router.patch('/:id',(req,res) =>{
 
  const updatedTask = req.body
  const id = req.params.id

  db.updateTask(id, updatedTask)
    .then(updatedItems =>{
      res.json({updatedItems})
    })
    .catch((err)=>{
      console.log(err)
      res.status(500).json({message:'something went wrong'})
    })
})

router.delete('/:id', (req,res)=>{

  const id = req.params.id
  db.deleteTask(id)
    .then(task =>{
      res.json({task})
    })
    .catch((err)=>{
      console.log(err)
      res.status(500).json({message:'something went wrong'})
    })
})


router.delete('/', (req,res)=>{

  db.deleteCompletedTask()
    .then(task =>{
      res.json({task})
    })
    .catch((err)=>{
      console.log(err)
      res.status(500).json({message:'something went wrong'})
    })
})




module.exports = router