"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.executeAsyncFoo = exports.registerAsyncFoo = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var FooDict = {}; //注册方法

var registerAsyncFoo = function registerAsyncFoo(key, foo) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  FooDict[key] = {
    foo: foo,
    params: params
  };
}; //获取方法


exports.registerAsyncFoo = registerAsyncFoo;

var executeAsyncFoo =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var valueDict, keys, _i, key, dict;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            valueDict = {};
            keys = Object.keys(FooDict);
            _i = 0;

          case 3:
            if (!(_i < keys.length)) {
              _context.next = 12;
              break;
            }

            key = keys[_i];
            dict = FooDict[key];
            _context.next = 8;
            return dict.foo(dict.params);

          case 8:
            valueDict[key] = _context.sent;

          case 9:
            _i++;
            _context.next = 3;
            break;

          case 12:
            return _context.abrupt("return", valueDict);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function executeAsyncFoo() {
    return _ref.apply(this, arguments);
  };
}();

exports.executeAsyncFoo = executeAsyncFoo;