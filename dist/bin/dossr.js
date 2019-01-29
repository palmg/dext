#!/usr/bin/env node
var create = require('../sh/create'),
    length = process.argv.length,
    param = 2 < length ? process.argv[2]:'simple';
console.log('install type=', param)
create(param);