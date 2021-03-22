// 模拟jquery的ajax函数

// $.ajax({
//     url,
//     type,
//     data: {},
//     success,
//     error,
//     complete,
//     beforeSend
// })

// function fn(a, b, c){} 参数列表的形式需要严格的记住参数的顺序
// 函数三要素: 函数名,参数,返回值
// 如果工具函数中,要传入大于3个的参数,一般都会要求传入一个对象
// 暂时不关心返回值,后面增加了promise,要返回一个promise对象
function ajax(options) {
  // 判断是否传入了一个对象,如果没有就直接return
  // 注意: 判断的目的是为了提高函数执行的性能,如果判断的逻辑太复杂,反而违背了初衷,所以简单判断就可以了
  // 这个代码太丑陋
  // if (options) {
  //   if (typeof options !== 'object') {
  //     return
  //   }
  // } else {
  //   return
  // }
  // 优雅一点:
  // 如果!options是true,后面就不需要再判断了
  if (!options || typeof options !== 'object') return
  // 注意:结构options中的数据,但是要用let,不要用const.因为const的常量不能被重新赋值
  let {
    url,
    type = 'get', //结构时是可以使用默认值的,没传type默认值生效,传了默认值不生效
    data,
    success,
    error,
    beforeSend,
    complete,
  } = options

  //判断url有没有,没有就return
  if (!url) return
  // 如果type属性不传,就默认使用get请求,如果传了就使用传入的方式
  //   if (!type) {
  //     type = 'get'
  //   }
  //   type = type || 'get'
  // 创建xhr对象
  const xhr = new XMLHttpRequest()
  //判断有没有传入data,如果有,就将data对象转成键值对的字符串,如果没有就不转
  data = data && json2Str(data)
  // 调用open方法
  // 如果是post请求,open方法直接里面传入type和url
  // 但是如果是get请求,就需要将data传入的数据,拼接到url后面
  if (type.toLowerCase() === 'get' && data) {
    url += '?' + data
    data = null
  }
  xhr.open(type, url)
  // 设置请求头
  type.toLowerCase() === 'post' &&
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')

  // 请求发送之前
  // res的值的可能性:
  //1. beforeSend没有写,那就是undefined. 2. 写了.但是里面没有显式的返回,结果也是undefined 3. 显式的写了return true, 返回值就是true 4. 显式的写了return false,返回值就是false
  const res = beforeSend && beforeSend()
  if (res === false) return
  // 发送请求
  // if (type === 'get') {
  //   xhr.send()
  // } else {
  //   xhr.send(json2Str(data))
  // }
  xhr.send(data)

  // 监听事件
  xhr.onreadystatechange = function () {
    // 判断是否完成
    if (xhr.readyState === 4) {
      complete && complete()
      // 判断是否成功
      if (xhr.status === 200) {
        success && success(xhr.responseText)
      } else {
        error && error()
      }
    }
  }
}

// 为了将data这个{键:值}的对象,转成键=值的字符串,封装一个工具函数
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
// [ 'name=zs', 'age=18', 'gender=1' ]
// name=zs&age=18&gender=1
// json2Str({ name: 'zs', age: 18, gender: 1 })

// p2p person to person
