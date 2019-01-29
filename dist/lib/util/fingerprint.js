"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fingerprint = void 0;
var FingerLength = 8;

var fingerprint = function fingerprint() {
  for (var _len = arguments.length, foos = new Array(_len), _key = 0; _key < _len; _key++) {
    foos[_key] = arguments[_key];
  }

  var _str = foos.map(function (foo) {
    return toString(foo);
  }).toString(),
      strLen = _str.length;

  var step = Math.round(strLen / FingerLength),
      retStr = '';
  step < 7 && (step = 7);

  for (var i = 0; FingerLength > i; i++) {
    retStr += _str.charAt(i * step % len);
  }

  return retStr;
};

exports.fingerprint = fingerprint;

var toString = function toString(foo) {
  return foo.toString().replace(/^function|\n|\(|\)|\[|\]|\{|\}|\,|;|\.|\\|_|:|\/|"|'|-|=|\*|!| /g, '');
};