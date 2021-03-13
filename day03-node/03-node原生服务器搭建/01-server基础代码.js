/** 
1. 引入http模块,用于搭建服务器
   const http = require('http')
2. 创建服务器对象
   const server = http.createServer((request, response) => {
   2.0 
   客户端的所有请求,都会被这个回调函数监听到
   2.1
   request 是请求对象,包含客户端传递过来的所有数据
   response 是响应对象,用于给客户端响应数据
   2.2 
   request.url 可以获取客户端通过get请求传递过来的数据
   2.3
   const queryString = require('querystring') querystring可以将查询字符串,转成一个对象
   const obj = queryString.parse(str) 将查询字符串转成对象的方法
   2.4 设置响应头
   response.setHeader('content-type', 'text/html;charset=utf-8')
   2.5 设置响应信息,并且响应给客户端
   response.end('<h3>服务器返回的结果</h3>')
})

3. 开启服务器
server.listen(5000, err => {
  if (err) console.log(err)
  else console.log('服务器启动成功')
})
*/
// 如何使用node原生的api.快速搭建一个后端服务
// 1. 引入模块 http node提供的系统模块
const http = require('http')
// 2. 创建服务器对象
// request 请求对象,用来接收客户端传过来的信息
// response 响应对象, 用来将数据返回给客户端
// 回调函数的执行时机: 当客户端给服务器发送请求的时候
const app = http.createServer((request, response) => {
  console.log('客户端发送请求过来了')
  // 接收客户端传过来的数据
  const str = request.url
  const str1 = str.split('?')[1]
  const queryString = require('querystring')
  const data = queryString.parse(str1)
  console.log(data)
  // 响应给客户端数据
  //   response.end('ok')
  // 如果响应中文,出现乱码问题,就执行下面这行代码.
  // 作用: 相当于服务器告诉客户端,应该使用utf-8解码
  response.setHeader('content-type', 'text/html;charset=utf8')
  response.end('完美的响应了.啊哈哈哈')
})

// 3. 启动服务器
//端口号:表示计算机中每一个正在运行的应用程序的唯一标识符
// 常用的端口号: 3000, 5000
// app.listen(端口号,回调函数)
app.listen(5000, (err) => {
  if (err) return console.log('服务器启动失败', err)
  console.log('服务器启动成功:', 'http://127.0.0.1:5000')
})
