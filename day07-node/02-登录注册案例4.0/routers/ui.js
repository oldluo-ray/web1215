const express = require('express')
const path = require('path')
const router = express.Router()
const { model } = require('../db/model')

// 这里面的路由都是响应html页面的
router.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/register.html'))
})
router.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/login.html'))
})
router.get('/index', async (req, res) => {
  // 去session中检查有没有id这个信息,如果有,表示之前登录成功了,如果没有就表示没有登录或已经退出了
  // console.log('重定向后: ', req.session.userid)
  // 当我们执行req.session.userid其实底层,会自动通过上传的sessionid去查找对应的空间,并且去空间中找userid,最后找到了,就返回给我们
  if (req.session.userid) {
    // 通过这个userid去数据库中查找对应的用户信息
    const user = await model.findOne({ _id: req.session.userid })
    // 因为要在index.html中动态的展示用户信息. 所以要将user这个用户对象,存储起来
    // 浏览器中存储数据的方式有很多.但是我们前端开发最常用的就是localStorage
    // localStorage存储数据是永久的, localStorage中存储数据是键值对的格式,但是只只能是字符串. node中无法直接使用localStorage,因为localStorage是浏览器中存储数据的容器
    // localStorage的存取操作:
    // localStorage.setItem('xx', '123')
    // localStorage.getItem('xx')
    // 暂时先直接重定向
    // res.sendFile(path.resolve(__dirname, '../public/index.html'))
    res.render('index',{user})
  } else {
    //说明之前没有登录过
    res.redirect('http://localhost:5000/login')
  }
})

module.exports = router
