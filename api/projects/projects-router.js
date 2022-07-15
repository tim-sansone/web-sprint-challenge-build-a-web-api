// Write your "projects" router here!

const express = require('express');
const router = express.Router();
const Projects = require('./projects-model')
const { validateId, validateProject } = require('./projects-middleware')

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

router.post('/', validateProject, (req, res, next) => {
    Projects.insert(req.body)
        .then(project => res.status(201).json(project))
        .catch(next)
})
