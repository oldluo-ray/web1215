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
    response.redirect(
      'http://localhost:5000/index.html?username=' + user.username
    )
  } else {
    // 没有找到,登录失败
    response.send('账户名或密码错误')
  }
})

module.exports = router
