const authorRouter = require('./authorRouter');
const projectRouter = require('./projectRouter');

// THIS FILE WILL BE OVERWRITTEN AUTOMATICALLY WHEN YOU CALL 'scaffoldme'!
// ALTER IT ONLY IF YOU KNOW WHAT YOU ARE DOING!

class Router {
    static registerRoutes(app) {
        app.use('/author', authorRouter);
		app.use('/project', projectRouter);
    }
}

module.exports = Router;
