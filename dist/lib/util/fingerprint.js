"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fingerprint = void 0;
var FingerLength = 8,
    M = 7;

var fingerprint = function fingerprint() {
  for (var _len = arguments.length, foos = new Array(_len), _key = 0; _key < _len; _key++) {
    foos[_key] = arguments[_key];
  }

  var _str = foos.map(function (foo) {
    return toString(foo);
  }).toString(),
      len = _str.length;

  var retStr = '';

  for (var i = 0; FingerLength > i; i++) {
    retStr += _str.charAt(i * 7 % len);
  }

  return retStr;
};

exports.fingerprint = fingerprint;

var toString = function toString(foo) {
  return foo.toString().replace(/^function|\n|\(|\)|\[|\]|\{|\}|\,|;|\.|\\|_|:|\/|"|'|-|=| /g, '');
};