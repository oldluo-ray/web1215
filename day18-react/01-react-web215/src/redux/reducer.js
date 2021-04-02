import { INCREMENT } from './constants'
//定义reducer函数
const initState = {
  count: 0,
  msg: 'abc',
}
export default function (state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.data,
      }
    default:
      return state
  }
}
