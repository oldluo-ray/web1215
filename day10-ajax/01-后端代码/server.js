const express = require('express')
const cors = require('cors')
const app = express()
app.listen(5000, (err) => {
  if (err) return console.log('服务器启动失败')
  console.log('服务器启动成功')
})
app.use(cors())
// 解析urlencode格式的参数
// app.use(express.urlencoded({ extended: true }))
// 解析json格式的参数
app.use(express.json())

app.get('/test', (request, response) => {
  // let arr = [
  //   {
  //     id: 1,
  //     username: '猛张飞',
  //     age: 18,
  //     gender: 1,
  //     hobby: ['喝酒', '打下属'],
  //   },
  //   {
  //     id: 2,
  //     username: '刘备',
  //     age: 18,
  //     gender: 0,
  //     hobby: ['编草鞋', '装可怜', '摔孩子'],
  //   },
  //   {
  //     id: 3,
  //     username: '关羽',
  //     age: 18,
  //     gender: 1,
  //     hobby: ['骑马', '讲义气', '耍大刀'],
  //   },
  // ]
  // response.send(JSON.stringify(arr))
  response.send(request.query)
})
app.post('/test', (request, response) => {
  console.log(request.body)
  response.send(request.body)
})
