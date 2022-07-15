// add middlewares here related to projects

const Projects = require('./projects-model')

module.exports = {
    validateId,
    validateProject
}

function validateId(req, res, next) {
    console.log('validate ID ping')
    const { id } = req.params;
    Projects.get(id)
        .then(project => {
            if(project){
                console.log(project)
                req.project = project;
                next();
                return;
            }
            next({status: 404, message: "project does not exist"})
        })
        .catch(next)
}

function validateProject(req, res, next) {
    console.log('validate post ping')
    const { name, description, completed } = req.body;
    if( typeof name !== 'string' || name.trim() === ''){
        next({status: 400, message: "please provide a name" })
        return
    }
    if( typeof description !== 'string' || description.trim() === ''){
        next({status: 400, message: "please provide a description" })
        return
    }
    if(typeof completed !== 'boolean'){
        next({status: 400, message: "please designate completion status"})
    }
    next()
}
