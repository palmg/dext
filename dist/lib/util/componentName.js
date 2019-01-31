"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDisplayName = void 0;

var getDisplayName = function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

exports.getDisplayName = getDisplayName;