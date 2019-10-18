const fs = require('fs');
const Logger = require('../util/logger');
const constants = require('../util/constants');
const fileops = require('../util/fileops');

function model(name, nameCamel){
   return (
`const mongoose = require('mongoose');

const ${nameCamel}Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('${name}', ${nameCamel}Schema);
`);
}

function controller(name, nameCamel){
    return (
`const ${name} = require('../models/${name}');

class ${name}Controller {
    static get(req, res) {
        ${name}.find((err, results) => {
            if(err){
                return res.status(500).end();
            }
            return res.status(200).json(results);
        });
    }
    
    static getById(req, res) {
        ${name}.findById(req.params.id, (err, ${nameCamel}) => {
            if(err){
                return res.status(500).end();
            }
            return res.status(200).json(${nameCamel});
        });
    }
}

module.exports = ${name}Controller;
`);
}

function router(name, nameCamel){
    return (
`const ${nameCamel}Router = require('express').Router();
const ${name}Controller = require('../controllers/${name}Controller');

${nameCamel}Router.route('/')
    .get(${name}Controller.get);

${nameCamel}Router.route('/:id')
    .get(${name}Controller.getById);

module.exports = ${nameCamel}Router;
`);
}

function updateRouter(){
    if(!fileops.dirExists(constants.ROUTES_DIR)) {
        Logger.initNotRan();
        return 1;
    }
    let models = [];
    // TODO Remove fs, implement method in fileops
    let files = fs.readdirSync(constants.MODELS_DIR);
    files.map(f => f.split('.')[0]).forEach((file) => {
        if(file.toLowerCase() !== 'index'){
            models.push(file);
        }
    });

    let modelImports = '';
    let modelRegisters = '';
    models.forEach((model, index, array) => {
        const modelNameCamel = model[0].toLowerCase() + model.slice(1);
        modelImports += `const ${modelNameCamel}Router = require('./${modelNameCamel}Router');\n`;
        modelRegisters += `app.use('/${modelNameCamel}', ${modelNameCamel}Router);`;
        modelRegisters += (index === array.length - 1) ? '' : '\n\t\t'
    });

    let updatedRoutersIndex = constants.ROUTES_INDEX
        .replace(constants.IMPORT_ROUTES_PATTERN, modelImports)
        .replace(constants.REGISTER_ROUTES_PATTERN, modelRegisters);

    fileops.create(`${constants.ROUTES_DIR}/${constants.INDEX_FILE}`, updatedRoutersIndex);
}

function add(name){
    if(!(
        fileops.dirExists(constants.CONTROLLERS_DIR)
        && fileops.dirExists(constants.MODELS_DIR)
        && fileops.dirExists(constants.ROUTES_DIR)
        && fileops.fileExists(`${constants.ROUTES_DIR}/${constants.INDEX_FILE}`))
    ){
        Logger.initNotRan();
        return 1;
    }
    if(typeof name !== 'string' || !/^([A-Z]+[a-z]*)+$/.test(name)){
        Logger.invalidModelName();
        return 1;
    } else {
        const nameCamel = name[0].toLowerCase() + name.slice(1);
        // Check if model does not already exist
        if(fileops.fileExists(`${constants.MODELS_DIR}/${name}.js`)){
            Logger.modelExists();
            return 1;
        }
        if(fileops.fileExists(`${constants.CONTROLLERS_DIR}/${name}Controller.js`)){
            Logger.controllerExists();
            return 1;
        }
        if(fileops.fileExists(`${constants.ROUTES_DIR}/${nameCamel}Router.js`)){
            Logger.routerExists();
            return 1;
        }
        try{
            fileops.create(`${constants.MODELS_DIR}/${name}.js`, model(name, nameCamel));
            fileops.create(`${constants.CONTROLLERS_DIR}/${name}Controller.js`, controller(name, nameCamel));
            fileops.create(`${constants.ROUTES_DIR}/${nameCamel}Router.js`, router(name, nameCamel));
            updateRouter();
        }catch(error){
            Logger.writeHasFailed();
        }
    }
}

module.exports = add;