"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkSign = exports.generateSign = void 0;
var Flag = 'establish';

var generateSign = function generateSign(url) {
  if (url.match(/^\S+\?\S+$/)) {
    return "".concat(url, "&route-tag=").concat(Flag);
  } else {
    return "".concat(url, "?route-tag=").concat(Flag);
  }
};

exports.generateSign = generateSign;

var checkSign = function checkSign(url) {
  return !!url.match(/^\S+route-tag=\S+$/);
};

exports.checkSign = checkSign;