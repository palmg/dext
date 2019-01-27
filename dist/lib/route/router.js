"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _router = _interopRequireWildcard(require("next/router"));

var _routingTypeSign = require("../util/routingTypeSign");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RouteType = {
  Start: 'startRoute',
  Complete: 'complete'
};
/**
 * 用于检测当前路由方式的高阶组件,会通过props向子组件注入路由相关的信息。
 * const YourComponent = props => {
 *      const {route} = props.route; //route 对象
 *      route.pathname; //当前浏览器的 url（不携带query参数）
 *      route.isPageRoute //{Boolean} 标记当前路由切换是否为内页切换
 *      route.isLocalRoute //{Boolean} 标记当前路由切换是否为组件内部切换
 *      route.sign //{Function} 路由签名方法，对当前跳转进行签名标记为Local Route
 *      return (<Link href={route.sign(pathname)}><a>link</a></Link>);
 * }
 * @param OriginComp {React.Component} 子组件
 * @returns {Function}
 */

var router = function router(OriginComp) {
  var Route =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Route, _React$Component);

    function Route() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Route);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Route)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        pageRoute: false,
        localRoute: false
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "routeChangeStart", function (url) {
        var check = (0, _routingTypeSign.checkSign)(url);

        _this.setState({
          pageRoute: !check,
          localRoute: check
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "routeChangeComplete", function (url) {
        _this.setState({
          pageRoute: false,
          localRoute: false
        });
      });

      return _this;
    }

    _createClass(Route, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var events = _router.default.events;
        events.on('routeChangeStart', this.routeChangeStart);
        events.on('routeChangeComplete', this.routeChangeComplete);
      }
    }, {
      key: "render",
      value: function render() {
        var pathname = this.props.router.pathname,
            state = this.state,
            params = Object.assign({
          route: {
            pathname: pathname,
            isPageRoute: state.pageRoute,
            isLocalRoute: state.localRoute,
            sign: _routingTypeSign.generateSign
          }
        }, this.props);
        delete params.router;
        return _react.default.createElement(OriginComp, params);
      }
    }]);

    return Route;
  }(_react.default.Component);

  return (0, _router.withRouter)(Route);
};

var _default = router;
exports.default = _default;