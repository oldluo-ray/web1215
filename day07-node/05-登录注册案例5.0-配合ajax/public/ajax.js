const xhr = new XMLHttpRequest()
//  2. 设置请求首行 open
xhr.open('post', 'http://127.0.0.1:5000/findUser')
//  3. 设置请求头
xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
//  4. 发送请求
// 发送请求之前,获取用户id
const id = location.search.split('=')[1]
xhr.send('userid=' + id)

//接收响应
xhr.onreadystatechange = function () {
  // 判断是否完成
  if (xhr.readyState === 4) {
    // 判断是否成功
    if (xhr.status === 200) {
      console.log(xhr.responseText)
      // 将字符串转成对象
      const obj = JSON.parse(xhr.responseText)
      console.log(obj)

      un.textContent = obj.username
      em.textContent = obj.email

      localStorage.setItem('user', xhr.responseText)
    }
  }
}
