'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// es6模块化中要注意的问题:
// 1.  默认导出,分别导出,统一导出,可以存在在一个模块中
var num = exports.num = 1;
var str1 = 'zzzzz';
exports.str1 = str1;
exports.default = { age: 1 };