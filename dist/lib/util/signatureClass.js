"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClassSignature = exports.signatureClass = void 0;

var _componentName = require("./componentName");

var signatureClass = function signatureClass(signature, klass) {
  klass.prototype[Symbol.toStringTag] = signature;
  klass.displayName = "signature_".concat(signature, "(").concat((0, _componentName.getDisplayName)(klass), ")");
  return klass;
};

exports.signatureClass = signatureClass;

var getClassSignature = function getClassSignature(klass) {
  return klass.prototype[Symbol.toStringTag];
};

exports.getClassSignature = getClassSignature;