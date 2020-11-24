const express = require('express')
const path = require('path')

const server = express()

const todoRoutes = require('./routes/todos')

server.use(express.json())
server.use(express.static(path.join('server', 'public')))


server.use('/api/v1/todos', todoRoutes)

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


module.exports = server
