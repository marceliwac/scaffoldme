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

module.exports = {
    dirExists,
    fileExists,
};