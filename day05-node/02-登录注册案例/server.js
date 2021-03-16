;(async function () {
  const express = require('express')
  const { model } = require('./db/model')
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

  // 配置注册的逻辑路由
  app.post('/register', async (request, response) => {
    // 获取用户上传的邮箱,用户名以及密码
    const { email, username, password } = request.body
    // 存储到数据库中
    try {
      await model.create({
        email,
        username,
        password,
      })
      // 注册成功,直接重定向到登录界面
      response.redirect('http://localhost:5000/login.html')
    } catch (error) {
      // 存储失败, 意味着注册失败
      response.send('注册失败')
    }

    //存储完成之后,响应浏览器,表示注册成功
  })
  // 配置登录的逻辑路由
})()
