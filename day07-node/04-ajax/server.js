const express = require('express')

const app = express()

app.listen(5000, () => {
  console.log('服务器启动成功')
})

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/test', (req, res) => {
  setTimeout(() => {
    console.log(req.query)
    res.send('ok')
  }, 3000)
})
app.post('/test', (req, res) => {
  // setTimeout(() => {
  console.log(req.body)
  res.send('ok')
  // }, 3000)
})
