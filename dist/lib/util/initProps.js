"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 *
 * @constructor 默认构造 new InitProps()
 */
function InitProps() {
  var _this = this;

  this.fooDict = {};

  this.executeFoo =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(ctx) {
      var valueDict, keys, _i, key;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              valueDict = {};
              keys = Object.keys(_this.fooDict);
              _i = 0;

            case 3:
              if (!(_i < keys.length)) {
                _context.next = 11;
                break;
              }

              key = keys[_i];
              _context.next = 7;
              return _this.fooDict[key](ctx);

            case 7:
              valueDict[key] = _context.sent;

            case 8:
              _i++;
              _context.next = 3;
              break;

            case 11:
              return _context.abrupt("return", valueDict);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

InitProps.prototype.registerFoo = function (key, foo) {
  if ('function' === typeof foo) {
    this.fooDict[key] = foo;
  } else if (Promise.prototype[Symbol.toStringTag] === foo.constructor.prototype[Symbol.toStringTag]) {
    //直接注入一个promise
    this.fooDict[key] = function () {
      return foo;
    };
  } else {
    throw "Typeof ".concat(foo.toString(), " is unsupported!");
  }
};

var _default = InitProps;
exports.default = _default;