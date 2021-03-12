/*
 * 流式文件读取：
 *   fs.createReadStream(path[, options])
 *       --path:要读取的文件路径+文件名+文件后缀
 *       --options：配置对象
 *           --flag：打开文件要进行的操作，默认值：'w'
 *                     'w' : 写入
 *                     'r' ：读取
 *                     'a' ：追加
 *            --mode ：文件的权限控制，默认值是0o666
 *                     0o111 : 文件可被执行的权限
 *                     0o222 ：文件被写入的权限
 *                     0o444 ：文件被读取的权限
 *            --encoding ：编码，默认是：'utf-8'
 *            --fd ：文件描述符（文件内部编码），默认值是null
 *            --autoClose ：自动关闭，当数据写入完毕后，自动关闭文件描述符，默认值true
 *            --start：读取文件的起始位置，默认是0
 *            --end ：读取文件结束的位置，默认是highWaterMark
 *            --highWaterMark：每次读取数据的大小（水管的粗细），默认值 64（字节byte） * 1024
 * */

// 引入模块
const fs = require('fs')
// 创建读取流
// 创建的时候就开启了读取流
// 但是当读取完毕的时候,会自动关闭读取流
const rs = fs.createReadStream('./music.mp3', {
  highWaterMark: 4 * 1024 * 1024,
})
// 读取文件的过程中,data对应的回调会被不断的触发.直到文件读取完毕
rs.on('data', (data) => {
  console.log(data)
})
// 监听
rs.on('open', () => {
  console.log('读取流开启了')
})
rs.on('close', () => {
  console.log('读取流关闭了')
})
