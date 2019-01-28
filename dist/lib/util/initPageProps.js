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

var regComp;
/**
 * InitPageProps用于管理指定页面加载的时候向组件提供数据。组件分为2类方法：注册，执行
 * @constructor 默认构造 new InitPageProps()
 */

function InitPageProps() {
  var _this = this;
  /**
   *
   * @type {Object} {fingerprint(Comp): [{key, foo}]}}
   */


  this.compDict = {};
  /**
   * @type {Object} {pathname: [{key, foo}]}}
   */

  this.pathDict = {};

  this.buildFoo = function (Component, ctx) {
    var path = InitPageProps.replaceUrl(ctx.pathname);

    _this.prePath2CompDict(Component, path);

    var methods = _this.compDict[(0, _fingerprint.fingerprint)(Component)],
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
/**
 * 对Path进行前置处理转换，将所有的页面路由方法绑定到compDict上。
 */


InitPageProps.prototype.prePath2CompDict = function (component, path) {
  var pathMethods = this.pathDict[path],
      finger = (0, _fingerprint.fingerprint)(component);

  if (pathMethods) {
    var compMethods = this.compDict[finger];

    if (compMethods) {
      this.compDict[finger] = compMethods.concat(pathMethods);
    } else {
      this.compDict[finger] = pathMethods;
    }

    delete this.pathDict[path];
  }
};
/**
 * 返回一个通用方法。
 * @param pageMethod
 * @param compMethod
 * @return {*}
 */


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
}; //===================================注册方法=======================================================

/**
 *
 * @param register {Function|String} 绑定组件页面url路径，或一个注册组件的方法。(register)=>{register(
 *   require.ensure([], require => {
 *       call(require('../../../pages/async/urlQueryLocal'))
 *   })
 * )}
 * @param key
 * @param foo
 */


InitPageProps.prototype.register = function (register, key, foo) {
  var _foo = this.wrapperPromise(foo);

  if ('string' === typeof register) {
    this.registerPath(register, key, foo);
  } else if ('function' === typeof register) {
    this.registerFunction(register, key, _foo);
  } else {
    throw "Type Error! Register Access String and Function!";
  }
};

InitPageProps.prototype.registerPath = function (path, key, foo) {
  var pathname = InitPageProps.replaceUrl(path),
      _methods = this.pathDict[pathname];

  if (_methods) {
    _methods.push({
      key: key,
      foo: foo
    });
  } else {
    this.pathDict[pathname] = [{
      key: key,
      foo: foo
    }];
  }
};

InitPageProps.prototype.registerFunction = function (register, key, foo) {
  var _this2 = this;

  var _this = this,
      _foo = _this.wrapperPromise(foo);

  register(function (Comp) {
    //Comp是对象
    var Component = Comp.default ? Comp.default : Comp;

    var _methods = _this.compDict[(0, _fingerprint.fingerprint)(Component)];

    if (_methods) {
      _methods.push({
        key: key,
        foo: _foo
      });
    } else {
      _this2.compDict[(0, _fingerprint.fingerprint)(Component)] = [{
        key: key,
        foo: _foo
      }];
    }
  });
};
/**
 * 如果传入的是一个promise，使用方法包装
 * @param foo
 * @return {function(): *}
 */


InitPageProps.prototype.wrapperPromise = function (foo) {
  if (Promise.prototype[Symbol.toStringTag] === foo.constructor.prototype[Symbol.toStringTag]) {
    return function () {
      return foo;
    };
  } else {
    return foo;
  }
}; //========================tool


InitPageProps.replaceUrl = function (url) {
  return url.replace(/ |\//g, '');
};

var _default = InitPageProps;
exports.default = _default;