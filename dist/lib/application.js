"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _app = _interopRequireDefault(require("next/app"));

var _applicationContext = _interopRequireDefault(require("./applicationContext"));

var _appPreload = require("./compInitProps/appPreload");

var _pagePreload = require("./compInitProps/pagePreload");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Application =
/*#__PURE__*/
function (_App) {
  _inherits(Application, _App);

  function Application() {
    var _getPrototypeOf2;

    _classCallCheck(this, Application);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Application)).call.apply(_getPrototypeOf2, [this].concat(props)));
  }
  /**
   * 页面在进行真实渲染之前执行预处理数据的方法。
   * 1）服务端打开页面时候一定会渲染一次。
   * 2）前端首次打开时不会执行，后面每次切换内页都会执一次。
   * @param Component {React.Component} 当前页面在 ./pages/下的文件组件实例
   * @param router {Object} Nextjs自定义的路由对象。
   * @param router.asPath {String} 页面切换之前的地址，比如从/切换到/about这里就是/。当设置Link的asPath属性时这里显示的asPath指向的路径
   * @param router.pathname {String} 与asPath类似，但是记录的是真实路径。
   * @param ctx {Object} Nextjs定义的整个app的上下文，在客户端之后asPath、pathname和query3个属性，在服务端会有res和req。
   * @param router.asPath {String} 和router.asPath类似，但是显示的是切换之后的地址。
   * @param router.pathname {String} 与router.pathname类似。
   * @param router.query {String} URL上的查询参数，比如?q=abc, router.query={q:'abc'}。
   * @returns {Promise<{pageProps, appProps: *, compProps}>}
   */


  _createClass(Application, [{
    key: "render",
    value: function render(children) {
      var _this$props = this.props,
          appProps = _this$props.appProps,
          compProps = _this$props.compProps,
          Component = _this$props.Component;
      return _react.default.createElement(_applicationContext.default.Provider, {
        value: {
          appProps: appProps,
          compProps: compProps
        }
      }, children || _react.default.createElement(Component, null));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps, appProps, compProps, getInitialProps, ret;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                pageProps = {}, appProps = {}, compProps = {};
                getInitialProps = (0, _pagePreload.executeCompPreload)(Component, ctx);

                if (!getInitialProps) {
                  _context.next = 9;
                  break;
                }

                _context.next = 6;
                return getInitialProps(ctx);

              case 6:
                ret = _context.sent;
                compProps = ret.compProps;
                pageProps = ret.pageProps;

              case 9:
                if (!(ctx && !ctx.req)) {
                  _context.next = 13;
                  break;
                }

                //前端,只有在服务端 ctx.req 和 ctx.res 才存在
                appProps = window.__NEXT_DATA__.props.appProps; //从页面上获取参数，__NEXT_DATA__就是nextjs渲染的异步数据

                _context.next = 16;
                break;

              case 13:
                _context.next = 15;
                return (0, _appPreload.executeAppPreload)(ctx);

              case 15:
                appProps = _context.sent;

              case 16:
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  appProps: appProps,
                  compProps: compProps
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Application;
}(_app.default);

var _default = Application;
exports.default = _default;