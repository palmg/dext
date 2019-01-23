"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var express = require('express'),
    next = require('next');

var _default = function _default(middleware, port) {
  //环境指示器
  var env = process.env.NODE_ENV !== 'production',
      // 创建一个服务端运行的Next app
  app = next({
    env: env
  }),
      // 请求处理器
  handle = app.getRequestHandler(),
      //端口
  p = port || 3000;
  app.prepare().then(function () {
    var server = express();
    middleware && middleware.forEach(function (foo) {
      server.use(function (req, res, next) {
        foo(app, req, res, next);
      });
    });
    server.get('*', function (req, res) {
      return handle(req, res);
    });
    server.listen(p, function (err) {
      if (err) throw err;
      console.log("> Ready on http://localhost:".concat(p));
    });
  }).catch(function (ex) {
    console.error(ex.stack);
    process.exit(1);
  });
};

exports.default = _default;