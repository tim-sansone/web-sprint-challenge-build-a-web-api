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
    Actions.insert(req.body)
        .then(action => res.status(201).json(action))
        .catch(next)
})

router.put('/:id', validateId, validateAction, (req, res, next) => {
    Actions.update(req.params.id, req.body)
        .then(action => res.json(action))
        .catch(next)
})

router.delete('/:id', validateId, (req, res, next) => {
    Actions.remove(req.params.id)
        .then(records => res.status(200).send())
        .catch(next)
})
