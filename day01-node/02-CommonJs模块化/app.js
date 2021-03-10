/**
 * 按照commonjs模块化的方式:
 * 1. 在一个js文件中,引入另一个js文件
 * require('js文件的路径') 返回对应js文件中导出的结果
 * 2. 在具体的js文件中,一定要通过module.exports将需要暴露的数据,导出来.这样其他js中才可以导入,并且使用
 *
 * 注意点:
 * 1. commonjs底层实现: exports = module.exports = {}
 * 合法的书写方式
 * module.exports = {xxx: 值}
 * moudle.exports.xxx = 值
 * exports.xxx = 值
 *
 * 2.如果直接使用module.exports赋值,只需要写一次,如果写多次,后面的会覆盖前面的
 *
 * 3. 引入require的代码执行的时候,要引入的那个js文件就会被执行
 *
 * 4. 当引入自定定义js文件的时候 require('./文件名') 只有自己定义的模块要写路径
 *    当引入的是node系统中自带的模块(一个js) require('模块名')
 *    当引入别人写的第三方模块(一个js) require('模块名')
 */
const module3 = require('./module3')

const module4 = require('./module4')
console.log(module4)
