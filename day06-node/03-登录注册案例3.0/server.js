;(async function () {
  const express = require('express')
  // 引入cookie-parser 在express中操作cookie的js库
  const cookieParser = require('cookie-parser')
  // 引入路由的代码
  const logicRouter = require('./routers/logic')
  const uiRouter = require('./routers/ui')
  // 引入数据库的代码
  const db = require('./db/db')
  await db
  console.log('数据库连接成功')
  // 如果连接数据库成功了,才有必要去开启服务器(因为服务器有大量的操作数据库的操作,如果服务器启动了,但是数据库没连,那么这个服务器其实很多功能都无法实现)
  const app = express()

  app.listen(5000, (err) => {
    if (err) return console.log('服务器启动失败', err)
    console.log('服务器启动成功')
  })

  // 设置静态资源的中间件
  app.use(express.static('public'))
  // 配置解析post请求数据的中间件
  app.use(express.urlencoded({ extended: true }))
  // 配置操作cookie的中间件
  app.use(cookieParser())

  // 配置ejs模板引擎,一定要写在路由前面
  // 告诉express,要使用的模板引擎是ejs
  app.set('view engine', 'ejs')
  // 告诉express,对应的模板放在哪里
  app.set('views', './templates')

  // 配置路由
  // 登录注册逻辑的路由
  app.use(logicRouter)
  // 响应html页面的路由
  app.use(uiRouter)
})()
