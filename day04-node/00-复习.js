/**
 *
 * mongoose
 *
 *   1. 连接
 *   mongoose.connect('mongodb://127.0.0.1:27017/数据库名') 返回一个promise
 *   2. 创建Schema
 *   const Schema = mongoose.Schema
 *   const xxxSchema = new Schema({
 *       属性名: {
 *           type: 指定属性的数据类型
 *           required:  表示当前属性必填
 *           unique: 表示当前属性的值是唯一的
 *           default: 默认值
 *       }
 *    }, {collection: 集合名}) 第二个参数解决自动给集合名加s的问题
 *   3. 创建model对象
 *    const xxxModel = mongoose.model(集合名, Schema对象)
 *
 *   4. 增删改查:
 *   xxxModel.create(文档对象, 回调)
 *   xxxModel.find/findOne(查询条件, 投影, 回调)
 *   xxxModel.updateOne/updateMany(查询条件, 要修改的内容, 回调)
 *   xxxModel.deleteOne/deleteMany(查询条件, 回调)
 *
 *
 * node原生 
 * 
 *   1. 引入http模块
 *   const http = require('http')
*    2. 创建服务对象
     const server = http.createServer((request, response)=>{
         只要客户端给服务器发送请求,这个回调函数就会被调用 
          request是请求对象包含了请求的信息
          request.url 获取到了路径和查询字符串 
          request.body 获取post请求的数据(默认拿不到)
          response 响应对象.用来给客户端响应
          respones.setHeader('键', '值')
          reponse.end(数据)
     })
     3. 开启服务
     server.listen(端口号, 回调)
 *
 * express快速搭建服务
 *   
 *   1. 引入模块
 *   const express = require('express')
 *   2. 创建应用对象
 *   const app = express()
 * 
 *   3. 开启服务
 *   app.listen(端口号, 回调)
 * 
 *   4. 配置一个监听get请求,路径为/abc的代码
 *   app.get('/abc', (request, response)=>{
 * 
 *      request.query 查询字符串的值 
 *      request.bdy 获取post请求的数据(默认拿不到)
 *      response.send(数据)
 *   })
 *   配置一个监听post请求,路径为/abc的代码
 *   app.post('/abc', (request, response)=>{
 *   })
 *
 *
 *
 * http 
 * 
 *     http协议: 是客户端和服务器之间通信的一个协议(超文本传输协议)
 *     http协议主要就是学习请求报文和响应报文
 * 
 *      get请求的报文:
 *          请求首行    请求方式 url http协议版本
 *          请求头
 *          请求空行
 *          请求主体     get请求没有请求主体
 *
 *      URL: 统一资源定位器(网络中的地址)
 *      完整路径: 协议://域名:端口号/路径?查询字符串#哈希值
 *      域名: 是对ip地址的包装  localhost
 *      IP地址:是互联网中计算机的唯一表示符
 *       127.0.0.1 本地回环地址
 *       192.168.xxx.xxx 这是局域网
 *      端口号: 计算机中正在运行的应用程序的唯一表示符 3000之后
 *      查询字符串: get请求上传的数据(可以忽略)
 *      哈希值: 也是客户端传给服务器的数据 (可以忽略)
 *
 *
 *
 *
 */
