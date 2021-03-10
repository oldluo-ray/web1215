let name = 'xiaowang'
let age = 18

// exports 导出 用来将node运行的js代码里面的内容暴露给其他js文件使用
// exports 默认是一个空对象 {name:xiaowang }
// 注意: 直接使用exports, 并不是把module忽略了. 这就是另外一种形式
exports.name = name
