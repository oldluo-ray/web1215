// 调用封装好的读写文件的函数
const util = require('./04-封装读写文件的函数')

const isDonePromise = util.copyFile('./music.mp3', './test.mp3')

isDonePromise.then(
  () => {
    console.log('copyFile执行完成之后才会调用')
  },
  () => {}
)
