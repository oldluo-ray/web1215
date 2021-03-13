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

    // 创建Schema对象(相当于给文档创建一个标准,约束)
    // 从mongoose上面拿到Schema
    const Schema = mongoose.Schema
    const schemaObj = new Schema(
      {
        id: {
          type: String,
          required: true, //必填
          unique: true, // 值唯一
        },
        name: {
          type: String,
          required: true,
        },
        age: {
          type: String,
          required: true,
        },
        gender: {
          type: String,
          required: true,
          default: '男',
        },
        register_date: {
          type: Date,
          default: Date.now(),
        },
        enable: {
          type: String,
          default: 'Y',
        },
      },
      // 这里是对集合名的规定.这样就不会自动加s了
      { collection: 'student' }
    )

    // 创建model对象, 对应的就是数据库中的集合
    // const modelObj = mongoose.model('集合名', Schema对象)
    // 默认mongoose会对student加一个s,变成students
    const modelObj = mongoose.model('student', schemaObj)

    // 利用model对象往集合中添加文档
    // modelObj.create(
    //   {
    //     id: 3,
    //     name: 'xxx佩奇',
    //     age: 18,
    //   },
    //   (err, data) => {
    //     if (err) return console.log('插入错误', err)
    //     console.log('数据插入成功')
    //   }
    // )

    // 查询数据
    // find方法返回的数据一定是一个数组,就算有一条数据,也是一个数组,
    // 如果找不到符合条件的也是一个空的数组
    // modelObj.find({ age: 20 }, (err, data) => {
    //   if (err) return console.log('查询失败', err)
    //   console.log('找到的数据: ', data)
    // })
    // findOne找不到就返回null, 找到就返回文档对象
    // modelObj.findOne({ age: 18 }, (err, data) => {
    //   if (err) return console.log('查询失败', err)
    //   console.log('找到的数据: ', data)
    // })
    // 修改数据
    // modelObj.updateOne({ age: 18 }, { $set: { age: 38 } }, (err, data) => {
    //   if (err) return console.log('修改失败', err)
    //   console.log('修改成功: ', data)
    // })
    // modelObj.updateMany(
    //   { gender: '男' },
    //   { $set: { gender: '女' } },
    //   (err, data) => {
    //     if (err) return console.log('修改失败', err)
    //     console.log('修改成功: ', data)
    //   }
    // )
    // 删除:
    // modelObj.deleteOne({ gender: '女' }, (err, data) => {
    //   if (err) return console.log('删除失败', err)
    //   console.log('删除成功: ', data)
    // })
    modelObj.deleteMany({ age: 18 }, (err, data) => {
      if (err) return console.log('删除失败', err)
      console.log('删除成功: ', data)
    })
  } catch (err) {
    console.log('数据库连接失败', err)
  }
})()
