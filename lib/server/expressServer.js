"use strict";

var express = require('express'),
    next = require('next'),
    //环境指示器
env = process.env.NODE_ENV !== 'production',
    // 创建一个服务端运行的Next app
app = next({
  env: env
}),
    // 请求处理器
handle = app.getRequestHandler(),
    //端口
port = parseInt(process.env.PORT, 10) || 3000;

function server(port, middleware) {
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
    server.listen(port, function (err) {
      if (err) throw err;
      console.log("> Ready on http://localhost:".concat(port));
    });
  }).catch(function (ex) {
    console.error(ex.stack);
    process.exit(1);
  });
}