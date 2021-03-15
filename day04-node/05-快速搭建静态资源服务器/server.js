const express = require('express')

const app = express()

// 当客户端发送请求过来,这个中间件一定会执行.发现请求的路径是一个静态资源,就自动将对应的静态资源响应给浏览器
app.use(express.static('public'))

app.listen(5000, (err) => {
  if (err) return console.log(err)
  console.log('服务器启动成功')
})
