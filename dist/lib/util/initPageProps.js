"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _fingerprint = require("./fingerprint");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 *
 * @constructor 默认构造 new InitPageProps()
 */
function InitPageProps() {
  var _this = this;
  /**
   *
   * @type {Object} [{key, foo}]
   */


  this.pageDict = {};

  this.buildFoo = function (Component, ctx) {
    var path = ctx.pathname.replace(/ \//g, ''),
        methods = _this.pageDict[path],
        pageMethod = Component.getInitialProps,
        compMethod = methods ?
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(ctx) {
        var compProps, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, method;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                compProps = {};
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 4;
                _iterator = methods[Symbol.iterator]();

              case 6:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 14;
                  break;
                }

                method = _step.value;
                _context.next = 10;
                return method.foo(ctx);

              case 10:
                compProps[method.key] = _context.sent;

              case 11:
                _iteratorNormalCompletion = true;
                _context.next = 6;
                break;

              case 14:
                _context.next = 20;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](4);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 20:
                _context.prev = 20;
                _context.prev = 21;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 23:
                _context.prev = 23;

                if (!_didIteratorError) {
                  _context.next = 26;
                  break;
                }

                throw _iteratorError;

              case 26:
                return _context.finish(23);

              case 27:
                return _context.finish(20);

              case 28:
                return _context.abrupt("return", compProps);

              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 16, 20, 28], [21,, 23, 27]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }() : false;
    return InitPageProps.buildPagePropsMethod(pageMethod, compMethod);
  };
}

InitPageProps.buildPagePropsMethod = function (pageMethod, compMethod) {
  var ret =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(ctx) {
      var compProps, pageProps;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!compMethod) {
                _context2.next = 6;
                break;
              }

              _context2.next = 3;
              return compMethod(ctx);

            case 3:
              _context2.t0 = _context2.sent;
              _context2.next = 7;
              break;

            case 6:
              _context2.t0 = {};

            case 7:
              compProps = _context2.t0;

              if (!pageMethod) {
                _context2.next = 14;
                break;
              }

              _context2.next = 11;
              return pageMethod(ctx);

            case 11:
              _context2.t1 = _context2.sent;
              _context2.next = 15;
              break;

            case 14:
              _context2.t1 = {};

            case 15:
              pageProps = _context2.t1;
              return _context2.abrupt("return", {
                compProps: compProps,
                pageProps: pageProps
              });

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function ret(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return !pageMethod && !compMethod ? null : ret;
};
/**
 *
 * @param path 要绑定的页面组件路径
 * @param key
 * @param foo
 */


InitPageProps.prototype.registerFoo = function (path, key, _foo) {
  path = path.replace(/ \//g, '');

  if ('function' === typeof _foo) {//TODO
  } else if (Promise.prototype[Symbol.toStringTag] === _foo.constructor.prototype[Symbol.toStringTag]) {
    //直接注入一个promise
    _foo = function foo() {
      return _foo;
    };
  } else {
    throw "Typeof ".concat(_foo.toString(), " is unsupported!");
  }

  var _methodList = this.pageDict[path];

  if (_methodList) {
    _methodList.push({
      key: key,
      foo: _foo
    });
  } else {
    this.pageDict[path] = [{
      key: key,
      foo: _foo
    }];
  }
};

var _default = InitPageProps;
exports.default = _default;