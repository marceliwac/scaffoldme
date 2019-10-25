const chalk = require('chalk');

function noCommand(){
    console.error(chalk.red('The utility has to be run with a command name!'));
}

function invalidCommand(){
    console.error(chalk.red('The supplied command name was invalid!'));
}

function emptyLine(){
    console.log('');
}

function initNotRan(){
    console.error(`${chalk.red('Folder structure does not match the required pattern!')}\n${chalk.yellow('Did you run \'scaffoldme init\' to initialise the directory structure?')}`);
}

function invalidModelName(){
    console.error(chalk.red('Operation has failed, supplied model name is invalid!\nAllowed model names can consist of alpha characters only and have to follow Pascal case.'));
}

function modelExists(){
    console.error(chalk.red('Operation has failed, the model already exists!'));
}

function controllerExists(){
    console.error(chalk.red('Operation has failed, the controller already exists!'));
}

function routerExists(){
    console.error(chalk.red('Operation has failed, the router already exists!'));
}

function controllersDirExists(){
    console.error(chalk.red('Operation has failed, \'controllers\' directory already exists!'));
}

function modelsDirExists(){
    console.error(chalk.red('Operation has failed, \'models\' directory already exists!'));
}

function routesDirExists(){
    console.error(chalk.red('Operation has failed, \'routes\' directory already exists!'));
}

function routesHasIndexFile(){
    console.error(chalk.red('Operation has failed, \'routes\' directory already has an index file!'));
}

function writeHasFailed(error){
    console.error(chalk.red(`Creating or writing to the file has failed! Ensure the directory is in correct state.\n${error.name} ${error.message}\n${error.stack}`));
}

function availableCommands(){
    console.info(
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