#!/usr/bin/env node
var path = require('path'),
    fs = require('fs-extra');

/**
 * 创建模板项目
 * @param type {String} 项目类型 [standard|simple|antd]
 */
function create(type = 'simple') {
    var ssrDir = path.resolve(__dirname, '..', 'example', type);
    var curRoot = process.cwd();
    var nodeModules = path.resolve(curRoot, 'node_modules');
    try{
        fs.copySync(ssrDir, curRoot);
        fs.remove(nodeModules);
        console.error('create success');
    }catch (e) {
        console.error(e);
    }
}
module.exports = create;