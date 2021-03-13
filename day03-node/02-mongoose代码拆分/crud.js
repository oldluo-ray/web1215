;(async function () {
  // 这个文件用来执行具体的增删改查
  const db = require('./db')
  const { xxxModel } = require('./model')
  // console.log(xxxModel)
  // 此时,可能数据库还没有连接成功
  try {
    await db
    console.log('数据库连接成功')
    xxxModel.findOne({ age: 18 }, (err, data) => {
      if (err) return console.log('查询失败', err)
      console.log('找到的数据: ', data)
    })
  } catch (e) {
    console.log(e)
  }
})()
