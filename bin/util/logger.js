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

function invalidModelName(){
    console.log(chalk.red('Operation has failed, supplied model name is invalid!\nAllowed model names can consist of alpha characters only.'));
}

function modelExists(){
    console.log(chalk.red('Operation has failed, the model already exists!'));
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

function controllersHasIndexFile(){
    console.log(chalk.red('Operation has failed, \'controllers\' directory already has an index file!'));
}

function routesHasIndexFile(){
    console.log(chalk.red('Operation has failed, \'routes\' directory already has an index file!'));
}

function writeHasFailed(error){
    console.log(chalk.red(`Creating or writing to the file has failed!\n${error.name} ${error.message}\n${error.stack}`));
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
    modelExists,
    modelsDirExists,
    controllersDirExists,
    routesDirExists,
    controllersHasIndexFile,
    routesHasIndexFile,
    writeHasFailed
};