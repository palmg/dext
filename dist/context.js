"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Provider", {
  enumerable: true,
  get: function get() {
    return _applicationContext.Provider;
  }
});
Object.defineProperty(exports, "Consumer", {
  enumerable: true,
  get: function get() {
    return _applicationContext.Consumer;
  }
});
exports.default = void 0;

var _applicationContext = _interopRequireWildcard(require("./lib/applicationContext"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = _applicationContext.default;
exports.default = _default;