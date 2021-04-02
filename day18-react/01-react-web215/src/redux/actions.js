import { SAVE_DATA } from './constants'
import axios from 'axios'

// 定义返回action对象的函数
function saveData(data) {
  return { type: SAVE_DATA, data }
}

// 为了配合redux-thunk实现在redux发送异步请求的目的,需要在actions中定义一个函数
function getData(searchName) {
  // 当getData执行的时候,redux-thunk会自动调用这个内层的函数
  return async (dispatch) => {
    // 执行异步操作
    const res = await axios({
      url: 'http://localhost:5000/search/users',
      params: {
        searchName,
      },
    })

    // res.data.items才是我们要的那个数组
    const actionObj = saveData(res.data.items)
    dispatch(actionObj)
  }
}

export { getData }
