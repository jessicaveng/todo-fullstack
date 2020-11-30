const express = require('express')
const path = require('path')

const taskRoutes = require('./routes/task')

const server = express()

server.use(express.json())
server.use(express.static(path.join('server', 'public')))

server.use('/api/v1', taskRoutes)

module.exports = server
