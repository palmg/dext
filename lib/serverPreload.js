"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _serverInitProps = require("./util/serverInitProps");

var _applicationContext = _interopRequireDefault(require("./applicationContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serverPreload = function serverPreload(key, foo) {
  (0, _serverInitProps.registerAsyncFoo)(key, foo);
  return function (OriginComp) {
    return function (props) {
      return _react.default.createElement(_applicationContext.default.Consumer, null, function (appProps) {
        var params = Object.assign({}, props);
        params[key] = appProps[key];
        return _react.default.createElement(OriginComp, params);
      });
    };
  };
};

var _default = serverPreload;
exports.default = _default;