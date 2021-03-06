import { SAVE_DATA, CHANGE_FLAG } from './constants'
import axios from 'axios'

// 定义返回action对象的函数
// 这些函数有个统一的名字叫actionCreator
// 这种直接return 对象的叫同步action
function saveData(data) {
  return { type: SAVE_DATA, data }
}

// 为了配合redux-thunk实现在redux发送异步请求的目的,需要在actions中定义一个函数
// 这种直接return 函数的的叫异步action
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

// 修改flag的需求
function changeFlag(data) {
  return { type: CHANGE_FLAG, data }
}

export { getData, changeFlag }
