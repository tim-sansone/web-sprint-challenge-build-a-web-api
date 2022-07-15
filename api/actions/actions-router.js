// Write your "actions" router here!
const express = require('express');
const router = express.Router();
const Actions = require('./actions-model')
const { validateId, validateProjectId, validateAction } = require('./actions-middleware')

module.exports = router;

router.get('/', (req, res, next) => {
    Actions.get()
        .then(actions => res.json(actions))
        .catch(next)
})

router.get('/:id', validateId, (req, res, next) => {
    res.json(req.action)
})

router.post('/', validateProjectId, validateAction, (req, res, next) => {
    console.log('post action ping')
    Actions.insert(req.body)
        .then(action => res.status(201).json(action))
        .catch(next)
})
