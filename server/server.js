const express = require('express')
const path = require('path')
const toDoRoutes = require('./routes/toDoRoutes')


// '/api/v1/tasks'
const server = express()

server.use(express.json())
server.use(express.static(path.join('server', 'public')))
server.use( '/', toDoRoutes)



module.exports = server
