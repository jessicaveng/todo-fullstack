const express = require('express')
const path = require('path')

const todosRoutes = require( './routes/todosRoutes' )

const server = express()

server.use(express.json())
server.use(express.static(path.join('server', 'public')))

server.use( '/api/v1/todos', todosRoutes )

module.exports = server
