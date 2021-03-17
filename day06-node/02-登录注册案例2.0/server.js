;(async function () {
  const express = require('express')

  const logicRouter = require('./routers/logic')
  const uiRouter = require('./routers/ui')
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

  // 配置路由
  app.use(logicRouter)
  app.use(uiRouter)
})()
