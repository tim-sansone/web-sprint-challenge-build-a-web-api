// add middlewares here related to projects

const Projects = require('./projects-model')

module.exports = {
    validateId
}

function validateId(req, res, next) {
    const { id } = req.params;
    Projects.get(id)
        .then(project => {
            if(project){
                req.project = project;
                next();
                return;
            }
            res.status(404).json({message: "project does not exist"})
        })
        .catch(next)
}
