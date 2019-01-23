#!/usr/bin/env node
var path = require('path'),
    fs = require('fs-extra');
console.log('filename:' , __filename);
console.log('root:' , process.cwd());
console.log('dirname:',__dirname);

/**
 * 创建模板项目
 * @param type {String} 项目类型 [standard|simple|with-antd]
 */
function createApp(type = 'standard') {
    var ssrDir = path.resolve(__dirname, '..', 'example', type);
    var curRoot = process.cwd();
    try{
        fs.copySync(ssrDir, curRoot);
    }catch (e) {
        console.error(e);
    }
}
module.exports = createApp;