const express = require('express')
const path = require('path')
const router = express.Router()

// 这里面的路由都是响应html页面的
router.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/register.html'))
})
router.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/login.html'))
})
router.get('/userCenter', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/userCenter.html'))
})
router.get('/index', (req, res) => {
  // 当req.session.userid要执行,那么服务器就会直接接受请求头中的cookie这个字段的信息
  // 然后服务器根据cookie里面的sessionid去查找对应的session空间,然后再去找userid这个值.如果找到了证明之前登录了, 如果没找到认为之前没有登录或已经退出了
  if (req.session.userid) {
    res.sendFile(path.resolve(__dirname, '../public/index.html'))
  } else {
    //说明之前没有登录过
    res.redirect('http://127.0.0.1:5000/login')
  }
})

module.exports = router
