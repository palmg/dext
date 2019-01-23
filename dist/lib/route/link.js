"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _link = _interopRequireDefault(require("next/link"));

var _routingTypeSign = require("../util/routingTypeSign");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ’next/link‘标签扩展，用于适应本地跳转
 * @param props
 * @return {*}
 * @constructor
 */
var Link = function Link(props) {
  var href = (0, _routingTypeSign.generateSign)(props.href),
      params = Object.assign({}, props, {
    href: href
  });
  return _react.default.createElement(_link.default, params);
};

var _default = Link;
exports.default = _default;