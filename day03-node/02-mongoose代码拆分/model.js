// 这个文件,用来创建Schema对象和model对象
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const xxxSchema = new Schema(
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

//创建model
const xxxModel = mongoose.model('student', xxxSchema)

module.exports = {
  xxxModel,
}
