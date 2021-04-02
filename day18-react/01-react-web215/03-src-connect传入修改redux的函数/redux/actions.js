// 为了方便,会将同样需求类型的action定义成一个函数

import { INCREMENT, DECREMENT } from './constants'

function inc(data) {
  return { type: INCREMENT, data }
}

function dec(data) {
  return { type: DECREMENT, data }
}

export { inc, dec }
