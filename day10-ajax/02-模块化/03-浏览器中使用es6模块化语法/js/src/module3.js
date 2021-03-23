// 默认导出

// 什么是语句: 一行代码就是一个语句,一般用分号来分割语句
// 比如: const a = 1; const b;  a++; if语句, for语句...
// 什么是表达式:  一般有返回值就是表达式
// 比如: 变量, 字面量, 运算, 函数调用...

// 注意: 一段代码时表达式就一定是语句, 如果是语句,不一定是表达式

// export default 表达式
// 注意: 一般用来直接导出某个数据. 比如: 对象,函数,字面量
// export default { name: 'zs' }

export default function () {
  console.log('module3d的函数执行了')
}
// export default 1
