import { CHANGE_FLAG } from './constants'
const initState = {
  flag: 'all', // all/zs
}
// reducer函数要求是一个纯函数. 所以reducer中不能写异步请求,定时器之类的代码
export default function (state = initState, action) {
  switch (action.type) {
    case CHANGE_FLAG:
      return {
        ...state,
        flag: action.data, //all / zs
      }
    default:
      return state
  }
}
