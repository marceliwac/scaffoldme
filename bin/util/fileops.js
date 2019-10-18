const fs = require('fs');

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

module.exports = {
    dirExists,
    fileExists,
    create,
    createDir
};