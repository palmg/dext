"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "appPreload", {
  enumerable: true,
  get: function get() {
    return _appPreload.default;
  }
});
Object.defineProperty(exports, "pagePreload", {
  enumerable: true,
  get: function get() {
    return _pagePreload.default;
  }
});

var _appPreload = _interopRequireDefault(require("./lib/compInitProps/appPreload"));

var _pagePreload = _interopRequireDefault(require("./lib/compInitProps/pagePreload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }