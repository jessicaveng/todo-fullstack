const express = require('express');

const db = require('../db/task');

const router = express.Router();

router.get('/', (req, res) => {
	db.getAllTasks()
		.then(tasksArr => {
			res.json(tasksArr)
		})
	.catch((err) => {
		console.log(err);
		res.status(500).json({ message: 'Request went wrong' });
	});
});


router.post('/', (req, res) => {
	db.addTasks(req.body)
		.then((results) => {
			res.json({ results });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: 'Somthing went wrong' });
		});
});


router.delete('/:id', (req,res) => {
	db.deltask(req.params.id)
	.then((results) => {
		console.log(results)
	  res.json({results})
	})
	.catch((err) => {
	  console.log(err);
	  res.status(500).json({ message: 'Oh no delete error, task not deleted' });
	})

})

// Update a task, needs to change database, this must change taskDetials.

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
  

module.exports = router;