#!/usr/bin/env node
var path = require('path'),
    fs = require('fs'),
    fsExtra = require('fs-extra');

(function () {
    try {
        var distWorkDir = path.resolve(process.cwd(), './dist/');
        fsExtra.remove(distWorkDir);
        console.info('Clean Dist Complete!');
    }catch (e) {
        console.error(e);
    }
})();