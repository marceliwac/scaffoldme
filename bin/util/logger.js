const chalk = require('chalk');

function noCommand(){
    console.log(chalk.red('The utility has to be run with a command name!'));
}

function invalidCommand(){
    console.log(chalk.red('The supplied command name was invalid!'));
}

function emptyLine(){
    console.log('');
}

function initNotRan(){
    console.log(`${chalk.red('Folder structure does not match the required pattern!')}\n${chalk.yellow('Did you run \'scaffoldme init\' to initialise the directory structure?')}`);
}

function invalidModelName(){
    console.log(chalk.red('Operation has failed, supplied model name is invalid!\nAllowed model names can consist of alpha characters only and have to follow Pascal case.'));
}

function modelExists(){
    console.log(chalk.red('Operation has failed, the model already exists!'));
}

function controllerExists(){
    console.log(chalk.red('Operation has failed, the controller already exists!'));
}

function routerExists(){
    console.log(chalk.red('Operation has failed, the router already exists!'));
}

function controllersDirExists(){
    console.log(chalk.red('Operation has failed, \'controllers\' directory already exists!'));
}

function modelsDirExists(){
    console.log(chalk.red('Operation has failed, \'models\' directory already exists!'));
}

function routesDirExists(){
    console.log(chalk.red('Operation has failed, \'routes\' directory already exists!'));
}

function routesHasIndexFile(){
    console.log(chalk.red('Operation has failed, \'routes\' directory already has an index file!'));
}

function writeHasFailed(error){
    console.log(chalk.red(`Creating or writing to the file has failed! Ensure the directory is in correct state.\n${error.name} ${error.message}\n${error.stack}`));
}

function availableCommands(){
    console.log(
`Commands:
${chalk.cyan('init')}\t\t\t Initialise the folder structure and generate the index files.
${chalk.cyan('add')} ${chalk.blue('<model-name>')}\t create the model, controller and router structure for a new model.`
    );
}

module.exports = {
    noCommand,
    invalidCommand,
    emptyLine,
    availableCommands,
    invalidModelName,
    initNotRan,
    modelExists,
    controllerExists,
    routerExists,
    modelsDirExists,
    controllersDirExists,
    routesDirExists,
    routesHasIndexFile,
    writeHasFailed
};