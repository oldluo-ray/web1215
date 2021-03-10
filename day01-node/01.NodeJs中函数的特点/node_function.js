//#region
//  * 1.在NodeJS中，所有的模块（js文件），都被自动包裹了一个外层函数
//  * 2. 外层函数：function (exports, require, module, __filename, __dirname) {...}
//  *       -- exports : 用于暴露模块
//  *       -- require ：用于引入模块
//  *       -- module ： 用于暴露了模块
//  *       -- __filename ：当前文件的路径（绝对路径）
//  *       --__dirname ：当前文件所在文件夹的路径（绝对路径）
//  *
//  * 3.这个外层函数有什么用？
//  *     1.让我们可以直接使用CommonJs语法。
//  *     2.隐藏内部实现（作用域）
//  *     3.处于安全性考虑
//  *
//  * arguments.callee.toString 在函数内部执行,用于查看当前函数
//  *
//  * */
//#endregion

// console.log('node执行的js代码,会自动在外面包裹一个函数')

// function fn() {
//   // arguments.callee指向的是当前函数, 就是fn
//   console.log(arguments.callee.toString())
// }

// fn()

//证明当一个js文件在node平台下执行的时候,node会自动创建一个函数,包裹这个js文件中的所有代码

// console.log(arguments.callee.toString())

// function (exports, require, module, __filename, __dirname){}
console.log(__filename) // 当前js文件的绝对路径
console.log(__dirname) // 当前js文件所处的文件夹的绝对路径
// C:\Users\luodi\Desktop\教学资料\教学代码\day01-node\01.NodeJs中函数的特点\node_function.js
// C:\Users\luodi\Desktop\教学资料\教学代码\day01-node\01.NodeJs中函数的特点
