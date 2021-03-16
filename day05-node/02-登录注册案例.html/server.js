const express = require('express')

const app = express()

app.listen(5000, (err) => {
  if (err) return console.log('服务器启动失败', err)
  console.log('服务器启动成功')
})

// 设置静态资源的中间件
app.use(express.static('public'))
