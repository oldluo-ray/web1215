const express = require('express')

const app = express()

// 启动服务器 node index.js

// 解决跨域
app.use((req, res, next) => {
  // 允许跨域的地址
  res.set('Access-Control-Allow-Origin', '*')
  // 允许跨域的请求方式
  res.set('Access-Control-Allow-Mehtods', 'GET,POST,PUT,DELETE')
  // 允许跨域的请求头
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  // 预检请求的缓存时间
  res.set('Access-Control-Max-Age', 36400)
  // 是否进行预检请求
  res.set('Access-Control-Allow-Credentials', true)

  if (req.method === 'options') {
    // 预检请求 直接返回响应
    res.end()
    return
  }

  next()
})

/*
  后台路由
    key： /search/users
    value： function () {}
*/
app.get('/search/users', function (req, res) {
  res.json({
    items: [
      {
        login: 'zs',
        html_url: 'https://github.com/zs',
        avatar_url: 'http://www.atguigu.com/teacher/new/lipeiqian.jpg',
        id: 1,
      },
      {
        login: 'ruanyf',
        html_url: 'https://github.com/ruanyf',
        avatar_url:
          'https://pic4.zhimg.com/50/58e8de98f_720w.jpg?source=54b3c3a5',
        id: 2,
      },
      {
        login: 'yyx990803',
        html_url: 'https://github.com/yyx990803',
        avatar_url: 'http://www.atguigu.com/teacher/new/yanhaijing.jpg',
        id: 3,
      },
      {
        login: 'zs',
        html_url: 'https://github.com/zs',
        avatar_url: 'http://www.atguigu.com/teacher/new/lipeiqian.jpg',
        id: 4,
      },
      {
        login: 'ruanyf',
        html_url: 'https://github.com/ruanyf',
        avatar_url:
          'https://pic4.zhimg.com/50/58e8de98f_720w.jpg?source=54b3c3a5',
        id: 5,
      },
      {
        login: 'yyx990803',
        html_url: 'https://github.com/yyx990803',
        avatar_url: 'http://www.atguigu.com/teacher/new/yanhaijing.jpg',
        id: 6,
      },
      {
        login: 'zs',
        html_url: 'https://github.com/zs',
        avatar_url: 'http://www.atguigu.com/teacher/new/lipeiqian.jpg',
        id: 7,
      },
      {
        login: 'ruanyf',
        html_url: 'https://github.com/ruanyf',
        avatar_url:
          'https://pic4.zhimg.com/50/58e8de98f_720w.jpg?source=54b3c3a5',
        id: 8,
      },
      {
        login: 'yyx990803',
        html_url: 'https://github.com/yyx990803',
        avatar_url: 'http://www.atguigu.com/teacher/new/yanhaijing.jpg',
        id: 9,
      },
    ],
  })
})

app.listen(5000, 'localhost', (err) => {
  if (!err) console.log('服务器启动成功了，请访问 http://localhost:5000')
  else console.log(err)
})
