import fn from './module1'
// 导入一个json文件,可以直接以默认导出的方式引入
import json from '../json/data.json'
// 引入css
import '../less/demo.less'
// 引入字体图标的样式文件
import '../less/iconfont.less'

// 引入将es6中高级语法转成es6之前的代码的包
// 如果使用es6语法引入一个模块,只是写了路径或包名,没有接收数据,那表示,只是把这个包里面的代码执行一遍.
// 注意: 配合core-js之后,可以不用显式的引入,但是这个包还是要下载的
// import '@babel/polyfill'
console.log(a)
fn()
console.log('测试')
console.log(json)
const fn1 = () => {
  console.log('箭头函数执行了')
}
fn1()

// alert(1111)
// console.log(1==2)

// console.log($)

const res = new Promise((resolve, reject) => {
  resolve()
  reject()
})

console.log(res)

console.log('测试测试测试')
