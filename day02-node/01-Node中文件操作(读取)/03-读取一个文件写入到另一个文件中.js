// 需求: 读取music.mp3 然后写入到 test.mp3文件
// 1. 创建写入和读取流
const fs = require('fs')
const ws = fs.createWriteStream('./test.mp3')
const rs = fs.createReadStream('./music.mp3')
// 2. 先读取文件
rs.on('data', (data) => {
  // data就是每次读取到的数据
  ws.write(data)
})

// 注意: 读取流会自动关闭,但是我们需要手动关闭写入流.因为不关闭流,会占用内存
// 读取完毕的时候就是写入流要关闭的时候
rs.on('close', () => {
  ws.end()
})
ws.on('close', () => {
  console.log('写入流关闭了')
})
