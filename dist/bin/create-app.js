#!/usr/bin/env node
const fs = require('fs');
console.log(__filename)
console.log(process.cwd())
console.log(__dirname)
function createApp(arguments) {
    const length = arguments;
    let argv = 'standard';
    for(let i=0; length > i; i++){
        argv = arguments[i];
        if('--type' === argv && length > i){
            break;
        }
    }
}
createApp(process.argv);