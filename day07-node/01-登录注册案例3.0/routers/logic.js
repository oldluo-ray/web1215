const express = require('express')
const router = express.Router()
const { model } = require('../db/model')

// 配置注册的逻辑路由
router.post('/register', async (request, response) => {
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
router.post('/login', async (request, response) => {
  // 接收用户上传的数据
  const { username, password } = request.body

  // 去数据库中查询是有这个username和password
  // model.findOne({ username: username, password: password })
  // 注意: 如果查找不到数据,也是查找成功,只是没有匹配的数据而已,是不会被catch捕获的,
  //如果是代码写的有问题,才会被catch捕获,但是代码有问题,肯定要在上线之前要解决.所以没有必要用try-catch包裹
  const user = await model.findOne({ username, password })

  // 判断是否查找到了数据
  if (user) {
    //表示查找到了,登录成功
    // 重定向到一个首页中
    // 是前端渲染的重定向的地址
    // response.redirect(
    //   'http://localhost:5000/index.html?username=' + user.username
    // )
    // 如果代码执行到这里,表示登录成功了. 要让浏览器将信息储存在cookie中
    // 第一个参数: 是cookie的键
    // 第二个参数: 是cookie的值
    // 第三个参数: 是一个对象,对象里面填写跟cookie相关的一些信息
    // maxAge: 表示cookie的有效期. 如果写了maxAge就是自定义有效期,如果没写就是默认的会话的时间. 注意:值是毫秒
    response.cookie('username', user.username, { maxAge: 1000 * 60 * 60 * 24 })
    // 后端使用ejs响应数据的重定向地址
    response.redirect('http://127.0.0.1:5000/index')
  } else {
    // 没有找到,登录失败
    response.send('账户名或密码错误')
  }
})

// 配置后端渲染的路由
// router.get('/indexssr', (req, res) => {
//   // res.render('模板名称', 要动态渲染的数据对象)
//   // res.render一执行,express就会根据之前app.set配置的模板路径去templates目录下查找index.ejs文件,然后将里面数据进行动态渲染,最后渲染完毕之后,响应给浏览器
//   // 注意: 要求第二个参数必须传入一个对象
//   res.render('index', {
//     username: '江鉴哲',
//     // 注意: 如果传入一个script脚本,那么可能存在安全问题
//     // info: '<script >while(true){console.log(1)}</script>',
//     age: 19,
//     arr: ['长沙名表行', '科勒卫浴', '360搜索虚假广告', '智联招聘贩卖信息']
//   })
// })

module.exports = router
