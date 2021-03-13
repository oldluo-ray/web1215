;(async function () {
  // 这个文件用来执行具体的增删改查
  const db = require('./db')
  const { xxxModel } = require('./model') //{xxxModel: model}
  // 解构的代码:相当于下面的两行代码
  // const obj= require('./model')
  // const xxxModel = obj.xxxModel

  try {
    // 此时,可能数据库还没有连接成功
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
