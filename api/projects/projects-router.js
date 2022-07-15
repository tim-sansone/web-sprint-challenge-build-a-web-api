// Write your "projects" router here!

const express = require('express');
const router = express.Router();
const Projects = require('./projects-model')
const { validateId } = require('./projects-middleware')

console.log(Projects)

module.exports = router

router.get('/', (req, res, next) => {
    Projects.get()
        .then(projects => res.json(projects))
        .catch(next)
})

router.get('/:id', validateId, (req, res, next) => {
    res.json(req.project)
})
