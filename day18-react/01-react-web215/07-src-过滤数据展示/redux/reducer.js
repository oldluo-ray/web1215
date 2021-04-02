import axios from 'axios'
import { SAVE_DATA, CHANGE_FLAG } from './constants'
const initState = {
  users: [],
  flag: 'all', // all/zs
}
// reducer函数要求是一个纯函数. 所以reducer中不能写异步请求,定时器之类的代码
export default function (state = initState, action) {
  switch (action.type) {
    case SAVE_DATA:
      return {
        ...state,
        users: action.data,
      }
    case CHANGE_FLAG:
      return {
        ...state,
        flag: action.data, //all / zs
      }
    default:
      return state
  }
}
