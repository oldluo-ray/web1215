// 创建Schema和model对象
// 创建Schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const lrSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now(),
  },
})

module.exports.model = mongoose.model('users', lrSchema)
