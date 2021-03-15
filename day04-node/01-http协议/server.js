const express = require('express')

const app = express()

app.listen(5000, (err) => {
  if (err) return console.log('服务器开启失败')
  console.log('服务器开启成功')
})

app.get('/abc', (request, response) => {})

// 当请求方式是post, 请求路径是/abc 这个回调会触发
app.post('/abc', (request, response) => {
  console.log(request.body)
  response.send('请求-响应成功')
})

// app.all('/xx')
