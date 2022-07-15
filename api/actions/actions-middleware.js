// add middlewares here related to actions

const Actions = require('./actions-model')
const Projects = require('../projects/projects-model')


module.exports = {
    validateId,
    validateProjectId,
    validateAction
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

function validateProjectId(req, res, next) {
    console.log("validate project id ping")
    const { project_id } = req.body
    Projects.get(project_id)
        .then(project => {
            if(project){
                next()
                return
            }
            next({status: 404, message: "project does not exist"})
        })
        .catch(next)
}

function validateAction(req, res, next) {
    console.log("validate action ping")
    const { description, notes, completed } = req.body
    if( typeof description !== 'string' || description.trim() === ''){
        next({status: 400, message: "please provide a description" })
        return
    }
    if( typeof notes !== 'string' || notes.trim() === ''){
        next({status: 400, message: "please provide notes" })
        return
    }
    if(typeof completed !== 'boolean'){
        next({status: 400, message: "please designate completion status"})
        return
    }
    next()
}
