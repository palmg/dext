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

  this.foolist = [];

  this.executeFoo =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(ctx) {
      var valueDict, value, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, foo;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              valueDict = {};
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 4;
              _iterator = _this.foolist[Symbol.iterator]();

            case 6:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 15;
                break;
              }

              foo = _step.value;
              _context.next = 10;
              return foo(ctx);

            case 10:
              value = _context.sent;
              valueDict = Object.assign(valueDict, value);

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
              return _context.abrupt("return", valueDict);

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
  }();
}

InitProps.prototype.registerFoo = function (foo) {
  if ('function' === typeof foo) {
    this.foolist.push(foo);
  } else if (Promise.prototype[Symbol.toStringTag] === foo.constructor.prototype[Symbol.toStringTag]) {
    //直接注入一个promise
    this.foolist.push(function () {
      return foo;
    });
  } else {
    throw "Typeof ".concat(foo.toString(), " is unsupported!");
  }
};

var _default = InitProps;
exports.default = _default;