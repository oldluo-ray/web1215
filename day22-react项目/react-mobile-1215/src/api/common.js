// 定义获取所有城市的数据的方法
import axios from 'axios'
function getCountry() {
  return axios({
    url: '/common/countryData',
  })
}

export { getCountry }
