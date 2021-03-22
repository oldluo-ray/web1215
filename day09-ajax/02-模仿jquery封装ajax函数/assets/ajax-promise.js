// 增加promise
// promise是一个封装异步代码的容器
function ajax(options) {
  return new Promise((resolve, reject) => {
    if (!options || typeof options !== 'object') return
    let {
      url,
      type = 'get',
      data,
      success,
      error,
      beforeSend,
      complete,
    } = options

    if (!url) return

    const xhr = new XMLHttpRequest()

    data = data && json2Str(data)

    if (type.toLowerCase() === 'get' && data) {
      url += '?' + data
      data = null
    }
    xhr.open(type, url)

    type.toLowerCase() === 'post' &&
      xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')

    const res = beforeSend && beforeSend()
    if (res === false) return

    xhr.send(data)

    // 监听事件
    xhr.onreadystatechange = function () {
      // 判断是否完成
      if (xhr.readyState === 4) {
        complete && complete()
        // 判断是否成功
        if (xhr.status === 200) {
          // 如果请求响应成功了,就应该让promise的状态转为成功
          resolve(xhr.responseText)
          success && success(xhr.responseText)
        } else {
          reject('请求响应错误')
          error && error()
        }
      }
    }
  })
}

function json2Str(obj) {
  if (!obj || typeof obj !== 'object') return
  // 这种方式可以使用,但是在内存中字符串不可变,拼接过程中会产生大量的字符串,对性能不好.所以不推荐
  //   let str = '' // 注意:如果不初始化为空字符串,会在前面多个undefined
  //   for (let key in obj) {
  //     str += key + '=' + obj[key] + '&'
  //   }
  //   console.log(str)
  // }
  //name=zs&age=18&gender=1&

  // 推荐的形式(减少字符串的产生,解决&问题)
  let arr = []
  for (let key in obj) {
    arr.push(key + '=' + obj[key])
  }
  return arr.join('&')
}
