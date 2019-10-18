const Project = require('../models/Project');

class ProjectController {
    static get(req, res) {
        Project.find((err, results) => {
            if(err){
                return res.status(500).end();
            }
            return res.status(200).json(results);
        });
    }
    
    static getById(req, res) {
        Project.findById(req.params.id, (err, project) => {
            if(err){
                return res.status(500).end();
            }
            return res.status(200).json(project);
        });
    }
}

module.exports = ProjectController;
