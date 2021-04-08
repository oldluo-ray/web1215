// 定义发送异步请求的函数
import axios from 'axios'

// 验证手机号是否注册过的函数
function sendCode(phone) {
  return axios({
    url: '/login/digits',
    method: 'post',
    data: {
      phone,
    },
  })
}

export { sendCode }
