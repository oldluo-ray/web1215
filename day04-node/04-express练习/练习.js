//需求: 创建一个express服务器.要求配置两个路由.
// 1. 请求方式get,路径为 /getData ,上传的参数是文件名(包含后缀名), 将对应的文件响应给浏览器
// 2. 请求方式是post, 路径为 /sendData, 上传用户的账号(username)和密码(password). 响应给用户账号和密码是否正确的结果
const express = require('express')
const path = require('path')

const app = express()

app.listen(5000, (err) => {
  if (err) return console.log(err)
  console.log('服务器启动成功')
})

app.use(express.urlencoded({ extended: true }))

app.get('/getData/:filename', (req, res) => {
  const filename = req.params.filename

  const newPath = path.resolve(__dirname, 'assets', filename)

  res.sendFile(newPath)
})

app.post('/sendData', (req, res) => {
  const { username, password } = req.body
  if (username === 'zs' && password === '123') {
    //成功
    res.send('ok')
  } else {
    res.send('fail')
  }
})
