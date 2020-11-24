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

module.exports = router;