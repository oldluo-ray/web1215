// 引入别的js文件中暴露出去的代码
// exports, require, module
// require 是一个函数
// require('要引入的js文件的相对路径')
// const module1 = require('./module1') //module1.js 的后缀名可以忽略
// const module2 = require('./module2')
// console.log(module1)
// console.log(module2)

// exports = module.exports = {}

let name = '呵呵呵呵'
let age = 20

// 可以
// module.exports = {
//   name: name,
//   age: age,
// }
//不可以
// exports = {
//   name: name,
//   age: age,
// }

// exports= {age}
// module.exports = {name}
// 注意:如果module.exports 和 exports 指向的对象不同,以module.exports为主
// module.exports = {
//   name: name,
// }

// exports.age = age
//exports = module.exports = {name,age}
module.exports.name = name
exports.age = age

// 结论:
// module.exports.xxx 可以
// module.exports = {} 可以
// exports.xxx  可以
// exports = {} 不可以

//exports = module.exports = {}
