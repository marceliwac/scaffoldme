const fs = require('fs');
const fileops = require('../util/fileops');
const Logger = require('../util/logger');
const constants = require('../util/constants');

function init(){
    if(fileops.dirExists(constants.CONTROLLERS_DIR)){
        Logger.controllersDirExists();
        return 1;
    }
    if(fileops.dirExists(constants.MODELS_DIR)){
        Logger.modelsDirExists();
        return 1;
    }
    if(fileops.dirExists(constants.ROUTES_DIR)){
        Logger.routesDirExists();
        return 1;
    }
    if(fileops.fileExists(`${constants.CONTROLLERS_DIR}/${constants.INDEX_FILE}`)){
        Logger.controllersHasIndexFile();
        return 1;
    }
    if(fileops.fileExists(`${constants.ROUTES_DIR}/${constants.INDEX_FILE}`)){
        Logger.routesHasIndexFile();
        return 1;
    }

    try {
        fileops.createDir(constants.CONTROLLERS_DIR);
        fileops.createDir(constants.MODELS_DIR);
        fileops.createDir(constants.ROUTES_DIR);
        fs.create(`${constants.CONTROLLERS_DIR}/${constants.INDEX_FILE}`, constants.CONTROLLERS_INDEX);
        fs.create(`${constants.ROUTES_DIR}/${constants.INDEX_FILE}`, constants.ROUTES_INDEX);
    } catch (error) {
        Logger.writeHasFailed(error);
    }
}

module.exports = init;