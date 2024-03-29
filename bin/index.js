#!/usr/bin/env node
const Logger = require('./util/logger');
const ops = require('./operations');

const args = process.argv.splice(process.execArgv.length + 2);
const command = args[0];
const name = args[1];

if(typeof command === 'undefined' || command === null){
    Logger.noCommand();
    Logger.emptyLine();
    Logger.availableCommands();
}else{
    switch(command){
        case 'init':
            ops.init();
            break;
        case 'add':
            ops.add(args[1]);
            break;
        default:
            Logger.invalidCommand();
            Logger.emptyLine();
            Logger.availableCommands();
            Logger.emptyLine();
    }
}
