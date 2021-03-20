const express = require('express')
const app = express()
app.listen(5000, () => {
  console.log('服务器启动成功')
})

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//接口
app.post('/validatorUsername', (request, response) => {
  // 注意: 实际开发中,上传的参数的属性名都是由后端决定,然后告诉前端,上传的参数的属性必须保持一致
  const { username } = request.body
  //   const { username } = request.query
  //   console.log(username)

  //按照正常的逻辑,应该通过这个username去数据库中查找,但是为了将重心放在前端的代码上,就不做数据库处理了. 所以用一个数组来简单模拟已经注册过的用户名
  const arr = ['钢铁侠', '蜘蛛侠', '蝙蝠侠', '猪猪侠', '大侠', '煎饼侠']
  // 如果找到了就返回这个数据的下标,如果没有找到就返回 -1
  const res = arr.findIndex((item) => {
    return item === username
  })

  if (res >= 0) {
    // 找到了
    // 传入一个对象,send方法会自动将这个对象转成json格式的字符串
    response.send({ code: 40000, data: {}, message: '用户被占用' })
  } else {
    // 没找到
    response.send({ code: 20000, data: {}, message: '用户可用' })
  }
})
