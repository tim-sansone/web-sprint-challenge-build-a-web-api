// Write your "actions" router here!
const express = require('express');
const router = express.Router();
const Actions = require('./actions-model')
const { validateId } = require('./actions-middleware')

module.exports = router;

router.get('/', (req, res, next) => {
    Actions.get()
        .then(actions => res.json(actions))
        .catch(next)
})

router.get('/:id', validateId, (req, res, next) => {
    res.json(req.action)
})
