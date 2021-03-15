//#region
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


* 一、请求对象（request）成员 指属性和方法
*     request.query  获取GET请求的查询字符串参数获取到的是一个对象
*     request.params 获取GET请求的参数路由中的参数，拿到的是一个对象
*     request.body   获取POST请求的请求体中的参数（必须要借助一个中间件才可以）
*     request.get('xxx') 获取请求头中指定的信息
*
* 二、响应对象（response)
*     response.send('xxxxx') 给客户端一个回应
*     response.download('相对路径') 给浏览器返回一个下载的响应
*     response.sendFile('绝对路径') 给浏览器发送一个文件，浏览器根据文件的种类，决定如何去展示。
*     response.redirect('网址') 重定向到一个新的网址
*     response.set('key','value') 自定义响应头
*     response.get('key') 获取响应头中的指定内容
*
* 
*/
//#endregion

// 路由: 就是一套, 一一对应映射规则

// 一个工具叫做nodemon. 使用nodemon启动服务器,会自动监视服务器代码,如果服务器代码修改了,会自动重启服务

const express = require('express')
const path = require('path') //path是node的系统模块,无需下载,直接引入使用即可

const app = express()

app.listen(5000, (err) => {
  if (err) return console.log('服务器启动失败', err)
  console.log('服务器启动成功')
})

// 定义路由
// /:参数名 就是给路由参数配置接收的变量名
// 注意: 如果配置了路由参数,那么默认就必须传值
// 如果参数是可选的,就后面加一个?
// 如果像下面这种情况,有可选,有必选,但是只传了一个,也可以匹配,只是传的数据直接给必填的变量赋值
app.get('/abc/:id?/:page', (request, response) => {
  // http://localhost:5000/abc/1?name=zs
  // 包含在路径里面的参数就是路由参数
  // request.params // 获取的就是路由参数
  // console.log(request.params)
  // 获取请求头的信息
  const res = request.get('user-agent')
  console.log(res)
  response.send('响应成功')
})

app.get('/xxx', (request, response) => {
  // reponse的成员
  // response.send('ok')  响应文本
  // response.download('./队列.jpg') // 让浏览器去下载文件
  // __dirname
  // console.log(__dirname + '/队列.jpg')
  // response.download(__dirname + '/队列.jpg') // 让浏览器去下载文件, 相对路径和绝对路径都可以
  // response.sendFile(__dirname + '/demo') // 必须传入一个绝对路径,然后浏览器接收到文件之后,如果浏览器支持这个文件就直接展示,但是如果不支持,就直接下载
  // console.log(__dirname + '../队列.jpg')
  // 需要使用node中提供的一个path的模块,帮助我们拼接路径
  // const newPath = path.resolve(__dirname, '../队列.jpg')
  // console.log(newPath)
  // response.sendFile(newPath)
  // response.redirect('http://www.atguigu.com') //重定向
  // const res = response.get('x-powered-by')
  // 设置响应头: 不能有中文, 要在响应数据之前
  response.set('a', 'left 5 minutes')
  // console.log(res)
  response.send('ok')
})
