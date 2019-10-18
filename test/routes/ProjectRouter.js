const projectRouter = require('express').Router();
const ProjectController = require('../controllers/ProjectController');

projectRouter.route('/')
    .get(ProjectController.get);

projectRouter.route('/:id')
    .get(ProjectController.getById);

module.exports = projectRouter;
