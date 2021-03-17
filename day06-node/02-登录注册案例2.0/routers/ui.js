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

module.exports = router
