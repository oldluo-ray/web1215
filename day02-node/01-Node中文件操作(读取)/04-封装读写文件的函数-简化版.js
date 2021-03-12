// 需求: 封装读写文件的函数,要求加上promise
// 引入模块(注意:一个js代码中,引入其他模块的代码只需要写一次)
const fs = require('fs')

function copyFile(sourcePath, targetPath) {
  return new Promise((resolve, reject) => {
    // 每次读写文件的时候,都要开启和关闭流.所以要将创建流写在函数体中,每次调用,都是开启流,执行完毕就关闭流
    const ws = fs.createWriteStream(targetPath)
    const rs = fs.createReadStream(sourcePath)

    //简化之后
    // pipe翻译过来是管道的意思. 每一个流对象都可以调用pipe方法,这个匹配内部会自动管理流. 最后返回的也是执行之后的一个流对象
    rs.pipe(ws)

    ws.on('close', () => {
      console.log('写入流关闭了')
      resolve('读取成功')
    })
  })
}

module.exports = {
  copyFile,
}
