"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _signatureClass = require("../util/signatureClass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
    var path = InitPageProps.replaceUrl(ctx.pathname),
        signature = (0, _signatureClass.getClassSignature)(Component),
        methods = function () {
      var methodList = _this.compDict[signature] || [];
      methodList = methodList.concat(_this.pathDict[path] || []);
      return methodList;
    }(),
        pageMethod = Component.getInitialProps,
        compMethod = methods ?
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(ctx) {
        var compProps, props, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, method;

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
                  _context.next = 15;
                  break;
                }

                method = _step.value;
                _context.next = 10;
                return method(ctx);

              case 10:
                props = _context.sent;
                compProps = Object.assign(compProps, props);

              case 12:
                _iteratorNormalCompletion = true;
                _context.next = 6;
                break;

              case 15:
                _context.next = 21;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](4);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 21:
                _context.prev = 21;
                _context.prev = 22;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 24:
                _context.prev = 24;

                if (!_didIteratorError) {
                  _context.next = 27;
                  break;
                }

                throw _iteratorError;

              case 27:
                return _context.finish(24);

              case 28:
                return _context.finish(21);

              case 29:
                return _context.abrupt("return", compProps);

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 17, 21, 29], [22,, 24, 28]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }() : false;

    return InitPageProps.buildPagePropsMethod(pageMethod, compMethod);
  };
}
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
 * @param register {Function|String} 绑定组件页面url路径、页面组件的签名、或一个注册组件的方法。(register)=>{register(
 *   require.ensure([], require => {
 *       call(require('../../../pages/async/urlQueryLocal'))
 *   })
 * )}
 * @param foo 异步执行方法
 */


InitPageProps.prototype.register = function (register, foo) {
  var _foo = this.wrapperPromise(foo);

  if ('string' === typeof register) {
    register.match(/\//) ? this.registerPath(register, foo) : this.registerSignature(register, foo);
  } else if ('function' === typeof register) {
    this.registerFunction(register, _foo);
  } else {
    throw "Type Error! Register Access String and Function!";
  }
};

InitPageProps.prototype.registerPath = function (path, foo) {
  var pathname = InitPageProps.replaceUrl(path),
      _methods = this.pathDict[pathname];

  if (_methods) {
    _methods.push(foo);
  } else {
    this.pathDict[pathname] = [foo];
  }
};

InitPageProps.prototype.registerFunction = function (call, foo) {
  var _this = this,
      _foo = _this.wrapperPromise(foo);

  call(function (Comp) {
    //Comp是对象
    var Component = Comp.default ? Comp.default : Comp,
        signature = Component.prototype[Symbol.toStringTag];

    _this.registerSignature(signature, _foo);
  });
};

InitPageProps.prototype.registerSignature = function (signature, foo) {
  var _methods = this.compDict[signature];

  if (_methods) {
    _methods.push(foo);
  } else {
    this.compDict[signature] = [foo];
  }
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