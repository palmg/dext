"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Consumer = exports.Provider = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApplicationContext = _react.default.createContext({});

var Provider = ApplicationContext.Provider;
exports.Provider = Provider;
var Consumer = ApplicationContext.Consumer;
exports.Consumer = Consumer;
var _default = ApplicationContext;
exports.default = _default;