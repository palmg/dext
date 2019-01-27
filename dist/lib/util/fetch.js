"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _isomorphicUnfetch = _interopRequireDefault(require("isomorphic-unfetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(url, data) {
  var options = {
    method: 'undefined' === typeof data ? 'GET' : 'POST'
  };
  return new Promise(function (resolve, reject) {
    //(suc, err)
    (0, _isomorphicUnfetch.default)(url, options).then(function (res) {
      if (res.ok) {
        return res.json();
      } else {
        reject({
          code: res.status,
          msg: "".concat(res.type, ":").concat(res.statusText)
        });
      }
    }).then(function (data) {
      //TODO 在这里处理数据
      resolve(data);
    }).catch(function (error) {
      reject(error);
    });
  });
}

;