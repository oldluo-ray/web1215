;(async function () {
  // 利用mongoose操作数据库的代码
  // 1. 引入mongoose
  const mongoose = require('mongoose')
  // 2. 连接数据库(注意: 要先保证数据库软件是正常启动的)
  // mongoose.connect('mongodb://ip地址:端口号/数据库名')
  //返回一个promise.成功表示连接成功,失败表示连接失败
  // 如果mongoose.connect返回的是成功的promise,那么由于配合了await.所以await后面的代码,必须要在promise成功之后才会执行
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/web1215', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('数据库连接成功')
  } catch (err) {
    console.log('数据库连接失败', err)
  }
})()
