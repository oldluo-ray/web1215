const express = require('express')
const cors = require('cors')
const app = express()
app.listen(5000, (err) => {
  if (err) return console.log('服务器启动成功')
  console.log('服务器启动成功')
})
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.get('/test', (request, response) => {
  response.send(request.query)
})
app.post('/test', (request, response) => {
  response.send(request.body)
})
