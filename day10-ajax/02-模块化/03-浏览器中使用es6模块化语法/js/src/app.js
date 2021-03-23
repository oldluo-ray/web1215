//导入
// 导入module1
// 如果导入的模块,采用了分别导出和统一导出.那么导入方式就是一样的
// 注意: 分别导出和统一导出,导出的变量名叫啥,导入时也叫啥.要保持一致
import { data, str, fn } from './module1'
import { data1, data2, data3, data4 } from './module2'
// 默认导出,只能写一次,不关心变量名. 引入时,可以随便定义
import xxxx from './module3'

// 注意:
// 1. 如果一个模块中使用了多种导出方式,导入的时候可以像下面这样写
//  {} 表示接收分别导出和统一导出的, 以逗号相隔, 后面的变量时接收默认导出的.
// 默认导出写前面, 其他的写后面

// 2. 导入时,如果是自定义的模块,要写成路径,如果是第三方的模块,直接写模块名

// 3. 分别导出和统一导出的花括号,绝不是解构语法.就是es6的语法,只是和解构看起来比较像
// const {} = 对象 这是解构
// import {} from './路径' 这不是解构
import yyyy, { num, str1 } from './module4'

console.log('module1', data, str)

console.log('=======================================')

console.log('module2', data1, data2, data3, data4)

console.log('==========================')

console.log('module3', xxxx)

console.log('==========================')

console.log('module4', yyyy, num, str1)
