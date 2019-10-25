const fs = require('fs');
const constants = require('./constants');

function dirExists(path) {
    try {
        const stats = fs.statSync(path);
        return stats.isDirectory();
    } catch (error) {
        return false;
    }
}

function fileExists(path) {
    try {
        const stats = fs.statSync(path);
        return stats.isFile();
    } catch (error) {
        return false;
    }
}

function create(path, content){
    fs.writeFileSync(path, content);
}

function createDir(path){
    fs.mkdirSync(path, {mode: '0755'});
}

function getModels(){
    let models = [];
    fs.readdirSync(constants.MODELS_DIR)
        .map(f => f.split('.')[0])
        .forEach((file) => {
        if(file.toLowerCase() !== 'index'){
            models.push(file);
        }
    });
    return models;
}

module.exports = {
    dirExists,
    fileExists,
    create,
    createDir,
    getModels
};