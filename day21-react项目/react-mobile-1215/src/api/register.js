// 定义发送异步请求的函数
import axios from 'axios'

// 验证手机号是否注册过的函数
function verifyPhoneIsHave(phone) {
  return axios({
    // 直接发送请求,会跨域.当前项目无法使用jsonp, cors后端也没有处理. 所以使用代理,解决跨域问题.
    // 1. 在package.json中,增加一个字段:
    // "proxy": "http://localhost:5000"
    // 2. 所以发请求的地址,改成相对路径
    // url: 'http://localhost:5000/regist/verify_phone',
    // 3. 注意:由于修改了package.json.所以要重启项目
    url: '/regist/verify_phone',
    method: 'post',
    data: {
      phone,
    },
  })
}

export { verifyPhoneIsHave }
