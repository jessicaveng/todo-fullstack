const express = require('express');
const router = express.Router();

const { getTodos, createTask, updateTask, deleteTask } = require('../db/db.js');

//GET CRUD R = Read

router.get('/todo', (req, res) => {
	console.log('route');
	getTodos()
		.then((todos) => {
			console.log('hello then: ', todos);
			res.json(todos);
			//res.json means stringify the response & put it in JSON format so we can then deal with it this way
		})
		.catch((err) => {
			console.log('catch', err);
			res.status(500).json({ message: 'Something broke' });
		});
});

//POST CRUD C = Create

router.post('/todo', (req, res) => {
    const newTask = req.body;
    //what the use types in
	createTask(newTask)
		.then((id) => {
			res.json({ id: id });
		})
		.catch((err) => {
			console.log('catch', err);
			res.status(500).json({ message: 'Something broke' });
		});
});

// PATCH CRUD U = UPDATE

router.patch('/todo/:id', (req, res) => {
    const id = req.params.id
    const updatedTask = req.body
    //  update by the id of the task
    // with req.body that the user types in

    updateTask(id, updatedTask)
    .then( () => {
        res.json({this:'works'})
        // send back an empty body or an object (for no reason, just to tell us its updating the database)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Something broke' })
    })
})

// CRUD D = DELETE

router.delete('/todo/:id', (req, res) => {
    const id = req.params.id
    deleteTask(id)
    .then( () => {
        res.json({this:'deletes'})
        // send back an empty body or an object (for no reason, just to tell us its updating the database)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Something broke' })
    })
})


module.exports = router;
