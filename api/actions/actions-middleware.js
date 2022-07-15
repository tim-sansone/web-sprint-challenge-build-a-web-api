// add middlewares here related to actions

const Actions = require('./actions-model')

module.exports = {
    validateId
}

function validateId(req, res, next) {
    console.log('validateId ping')
    const { id } = req.params;
    Actions.get(id)
        .then(action => {
            if(action){
                req.action = action;
                next()
                return
            }
            next({status: 404, message: "action does not exist"})
        })
        .catch(next)
}
