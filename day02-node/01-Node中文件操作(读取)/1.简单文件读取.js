/*
 * 简单文件读取：
 *   fs.readFile(path[, options], callback)
 *           --path:要写入的文件路径+文件名+文件后缀
 *           --options：配置对象
 *               --flag：打开文件要进行的操作，默认值：'w'
 *                     'w' : 写入
 *                     'r' ：读取
 *                     'a' ：追加
 *               --encoding ：编码，默认是：'utf-8'
 *           --callback：回调函数
 *
 */

// 引入模块:
const fs = require('fs')
// 如果读取成功,回调函数中可以获取到读取到的数据
fs.readFile('./hello.txt', (err, data) => {
  // data默认是一个buffer
  if (err) return console.log(err)
  // data.toString() 把buffer转成字符串
  console.log('读取成功', data.toString())
})
