"use strict";

var express = require('express'),
    next = require('next');

module.exports = function () {
  var middlewares = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var port = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
  var env = process.env.NODE_ENV !== 'production',
      // 创建一个服务端运行的Next app
  app = next({
    env: env
  }),
      // 请求处理器
  handle = app.getRequestHandler();
  app.prepare().then(function () {
    var server = express();
    middlewares.forEach(function (foo) {
      server.use(function (req, res, next) {
        foo(app, req, res, next);
      });
    });
    server.get('*', function (req, res) {
      return handle(req, res);
    });
    server.listen(port, function (err) {
      if (err) throw err;
      console.log("> Ready on http://localhost:".concat(port));
    });
  }).catch(function (ex) {
    console.error(ex.stack);
    process.exit(1);
  });
};

module.exports.defualt = module.exports;