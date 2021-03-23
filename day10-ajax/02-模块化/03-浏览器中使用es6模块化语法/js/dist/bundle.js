(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _module5 = require('./module4');

var _module6 = _interopRequireDefault(_module5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 默认导出,只能写一次,不关心变量名. 引入时,可以随便定义
//导入
// 导入module1
// 如果导入的模块,采用了分别导出和统一导出.那么导入方式就是一样的
// 注意: 分别导出和统一导出,导出的变量名叫啥,导入时也叫啥.要保持一致
console.log('module1', _module.data, _module.str);

// 注意: 如果一个模块中使用了多种导出方式,导入的时候可以像下面这样写
//  {} 表示接收分别导出和统一导出的, 以逗号相隔, 后面的变量时接收默认导出的.
// 默认导出写前面, 其他的写后面


console.log('=======================================');

console.log('module2', _module2.data1, _module2.data2, _module2.data3, _module2.data4);

console.log('==========================');

console.log('module3', _module4.default);

console.log('==========================');

console.log('module4', _module6.default, _module5.num, _module5.str1);
},{"./module1":2,"./module2":3,"./module3":4,"./module4":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fn = fn;
// es6导出的语法:
// 三种方式:
// 分别导出
// 统一导出
// 默认导出

// 介绍分别导出
// 注意: 分别导出可以写多次,并且后面只能写声明或语句
var data = exports.data = [1, 2, 3];
var str = exports.str = 'abc';
function fn() {
  console.log('函数执行了');
}
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 统一导出
var data1 = '456';
var data2 = '789';
var data3 = 'abc';
var data4 = 'efg';
// 注意: 统一导出就是导出一个对象,可以写多次,但是一般不会这样写
exports.data1 = data1;
exports.data2 = data2;
exports.data3 = data3;
exports.data4 = data4;
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  console.log('module3d的函数执行了');
};
},{}],5:[function(require,module,exports){
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
},{}]},{},[1]);
