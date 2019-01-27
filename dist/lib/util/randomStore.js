"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomStore = void 0;
var randomDict = {};

var randomStore = function randomStore() {
  var randomStr = '';

  do {
    randomStr = Math.random().toString(32).substr(2);
  } while (randomDict[randomStr]);

  randomDict[randomStr] = 1;
  return randomStr;
};

exports.randomStore = randomStore;