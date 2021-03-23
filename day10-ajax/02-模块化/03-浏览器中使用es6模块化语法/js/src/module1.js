// es6导出的语法:
// 三种方式:
// 分别导出
// 统一导出
// 默认导出

// 介绍分别导出
// 注意: 分别导出可以写多次,并且后面只能写声明或语句
export const data = [1, 2, 3]
export let str = 'abc'
export function fn() {
  console.log('函数执行了')
}
