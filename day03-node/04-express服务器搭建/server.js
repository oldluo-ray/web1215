/**
 * 
1. 引入express
const express = require('express')
2. 使用express创建一个应用对象
const app = express()
// 在响应头中不显示后台是使用哪种开发语言或库
app.disable('x-powered-by')

3.监听get请求 第一个参数是请求的路径
app.get('/', (request, response) => {
  request.query //获取get请求的查询字符串
  // 响应数据
  response.send('<h3>express返回的数据</h3>')
})
4. 监听post请求
app.post('/',(request,response)=>{
  response.body 获取post请求上传的数据,但是默认拿不到,需要使用中间件配合
  response.send('接收到了post请求')
})

5. 开启服务器
app.listen(5000, err => {
  if (err) console.log(err)
  else console.log('服务器启动成功')
})
*/
// 1. 引入express
const express = require('express')
// 2. 创建应用对象
const app = express()

// 处理请求
// 如果浏览器传递过来get请求,那么回调函数就会触发
// 如果浏览器发送了一个路径为 "/", 请求方式为get的请求,就会触发这个回调
app.get('/', (request, response) => {
  // console.log('服务器接收到请求了', '/')
  // request.query用来接收get请求传过来的查询字符串的数据,自动转成对象
  // 注意:如果要接收post请求,使用request.body来接收.但是默认接收不到
  console.log(request.query)

  response.send('<h1>你好,加个微信</h1>')
})
// 如果请求的路径是 "/abc", 并且请求方式是get, 那么下面的回调函数会被触发
app.get('/abc', (request, response) => {
  console.log('服务器接收到请求了', '/abc')
})

// 3. 开启服务器
app.listen(5000, (err) => {
  if (err) return console.log('express服务器启动失败', err)
  console.log('express服务器开启成功', 'http://localhost:5000')
})
