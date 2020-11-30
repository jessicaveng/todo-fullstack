const express = require('express')
const path = require('path')
const todoRoute = require('./routes/todos')

const server = express()

server.use(express.json())
server.use(express.static(path.join('server', 'public')))
server.use('/api/v1/todo', todoRoute)

module.exports = server
