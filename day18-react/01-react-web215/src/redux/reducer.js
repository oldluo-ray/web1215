import axios from 'axios'
import { SAVE_DATA } from './constants'
const initState = {
  users: [],
}
// reducer函数要求是一个纯函数. 所以reducer中不能写异步请求,定时器之类的代码
export default function (state = initState, action) {
  switch (action.type) {
    case SAVE_DATA:
      return {
        ...state,
        users: action.data,
      }
    default:
      return state
  }
}
