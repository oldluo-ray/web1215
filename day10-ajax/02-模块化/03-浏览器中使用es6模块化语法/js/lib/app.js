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