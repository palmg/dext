"use strict";

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * 数据缓存案例
 * @type {LRUCache}
 */
var LruCache = require('lru-cache'); //TODO


var LRUCacheOptions = {
  max: 50,
  //存储空间
  maxAge: 30 * 100000 * 1000,
  //单条数据如果没有遇到直接移除的情况最大缓存时间
  length: function length(n, key) {
    return n * 2 + key.length;
  }
},
    cache = new LruCache(LRUCacheOptions);

function getRequestCacheKey(req) {
  return "".concat(req.url);
}

;

function pageCache(app, req, res, next) {
  "".concat(req.url).match(/^\/_next\/\S+/) ? next() : renderAndCache(app, req, res);
}

function renderAndCache(_x, _x2, _x3) {
  return _renderAndCache.apply(this, arguments);
}

function _renderAndCache() {
  _renderAndCache = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(app, req, res) {
    var key, value, url, _value;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            key = getRequestCacheKey(req), value = cache.get(key), url = "".concat(req.url);

            if (!value) {
              _context.next = 6;
              break;
            }

            res.setHeader('X-Hit-Cache', 'Yes');
            res.send(value);
            _context.next = 19;
            break;

          case 6:
            res.setHeader('X-Hit-Cache', 'No');
            _context.prev = 7;
            _context.next = 10;
            return app.renderToHTML(req, res, url.replace(/\?\S+$/, ''), req.query);

          case 10:
            _value = _context.sent;
            cache.set(key, _value);
            res.send(_value);
            _context.next = 19;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](7);
            console.error(_context.t0);
            app.renderError(_context.t0, req, res, url, req.params);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[7, 15]]);
  }));
  return _renderAndCache.apply(this, arguments);
}

module.exports = pageCache;