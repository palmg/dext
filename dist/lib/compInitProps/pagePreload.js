"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.executeCompPreload = void 0;

var _react = _interopRequireDefault(require("react"));

var _initPageProps = _interopRequireDefault(require("../util/initPageProps"));

var _fingerprint = require("../util/fingerprint");

var _applicationContext = require("../applicationContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initPageProps = new _initPageProps.default();
var executeCompPreload = initPageProps.buildFoo;
/**
 * 每次页面变更时执行的数据加载方法。
 * @param register {Function|String} 一个页面的url路径或者一个注册组件的方法。(register)=>{register(
 *   require.ensure([], require => {
 *       call(require('../../../pages/async/urlQueryLocal'))
 *   })
 * )}
 * @param foo
 * @returns {function(*=): function(*=): *}
 */

exports.executeCompPreload = executeCompPreload;

var pagePreload = function pagePreload(register, foo) {
  return function (OriginComp) {
    var key = (0, _fingerprint.fingerprint)(foo, OriginComp, register);
    initPageProps.register(register, key, foo);
    return function (props) {
      return _react.default.createElement(_applicationContext.Consumer, null, function (value) {
        var params = Object.assign({}, props, value['compProps'][key]);
        return _react.default.createElement(OriginComp, params);
      });
    };
  };
};

var _default = pagePreload;
exports.default = _default;