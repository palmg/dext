#!/usr/bin/env node
var path = require('path'),
    fs = require('fs'),
    fsExtra = require('fs-extra'),
    Exclude = {'dist': 1, '.idea': 1, 'node_modules': 1, 'package-lock.json': 1};

function copyRoot() {
    try {
        var curRoot = process.cwd(),
            distWorkDir = path.resolve(curRoot, `./dist/`);
        // fsExtra.copySync(`${curRoot}/bin/`, `${distWorkDir}/bin/`);
        // fsExtra.copySync(`${curRoot}/package.json`, `${distWorkDir}/package.json`);
        ['standard', 'simple', 'with-antd'].forEach(folder => {
            var curExampleDir = path.resolve(curRoot, `./example/${folder}/`);
            fs.readdirSync(curExampleDir).filter(name => !Exclude[name]).forEach(file => {
                fsExtra.copySync(path.resolve(curExampleDir, file), path.resolve(distWorkDir, './example', folder, file));
            })
        })
        console.info('Copy Complete!');
    } catch (e) {
        console.error('Copy Error!', e);
    }
}

copyRoot();