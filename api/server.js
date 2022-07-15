const express = require('express');
const server = express();

module.exports = server;

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

server.use(express.json());

const projectsRouter = require('./projects/projects-router');
server.use('/api/projects', projectsRouter)

server.get('/', (req, res) => {
    res.send('<h1>The Server Is Online</h1>')
})

server.use((error, req, res, next) => {
    res.status(error.status || 500).json({message: error.message || "internal server error"})
})
