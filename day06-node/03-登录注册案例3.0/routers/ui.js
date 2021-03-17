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
router.get('/index', (req, res) => {
  //先检查一下,cookie信息,如果有并且正确就表示之前登录过,就响应这个index.html.如果没有登录过,就重定向到login页面
  // 获取浏览器传上来的cookie的信息
  // 注意: 由于cookie-parser帮我们把请求中的cookie信息解析完成了,所以可以直接通过request.cookies获取上传上来的cookie信息
  // console.log(req.cookies.username)
  if (req.cookies.username) {
    res.sendFile(path.resolve(__dirname, '../public/index.html'))
  } else {
    //说明之前没有登录过
    res.redirect('http://localhost:5000/login')
  }
})

module.exports = router
