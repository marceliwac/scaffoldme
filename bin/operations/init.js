const fs = require('fs');
const fileops = require('../util/fileops');
const Logger = require('../util/logger');

const CONTROLLER_INDEX =
`
module.exports = {

};
`;

const ROUTES_INDEX =
`
class Router {
    static registerRoutes(app) {
    
    }
}

module.exports = Router;
`;


const CONTROLLERS_DIR = './controllers';
const MODELS_DIR = './models';
const ROUTES_DIR = './routes';
const INDEX_FILE = 'index.js';

function init(){
    if(fileops.dirExists(CONTROLLERS_DIR)){
        Logger.controllersDirExists();
        return 1;
    }
    if(fileops.dirExists(MODELS_DIR)){
        Logger.modelsDirExists();
        return 1;
    }
    if(fileops.dirExists(ROUTES_DIR)){
        Logger.routesDirExists();
        return 1;
    }
    if(fileops.fileExists(`${CONTROLLERS_DIR}/${INDEX_FILE}`)){
        Logger.controllersHasIndexFile();
        return 1;
    }
    if(fileops.fileExists(`${ROUTES_DIR}/${INDEX_FILE}`)){
        Logger.routesHasIndexFile();
        return 1;
    }

    try {
        fs.mkdirSync(CONTROLLERS_DIR, {mode: '0755'});
        fs.mkdirSync(MODELS_DIR, {mode: '0755'});
        fs.mkdirSync(ROUTES_DIR, {mode: '0755'});
        fs.writeFileSync(`${CONTROLLERS_DIR}/${INDEX_FILE}`, CONTROLLER_INDEX, {flag: 'w'});
        fs.writeFileSync(`${ROUTES_DIR}/${INDEX_FILE}`, ROUTES_INDEX);
    } catch (error) {
        Logger.writeHasFailed(error);
    }
}

module.exports = init;