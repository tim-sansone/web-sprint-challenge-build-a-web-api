// Write your "projects" router here!

const express = require('express');
const router = express.Router();
const Projects = require('./projects-model')

console.log(Projects)

module.exports = router

router.get('/', (req, res, next) => {
    Projects.get()
        .then(projects => res.json(projects))
        .catch(next)
})
