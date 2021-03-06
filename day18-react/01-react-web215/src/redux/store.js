import { createStore, applyMiddleware, combineReducers } from 'redux'
// 控制users的reducer
import userReducer from './reducer'
import flagreducer from './flagreducer'

// 引入redux-thunk
import thunk from 'redux-thunk'
// 引入配合中间件使用,让redux调试工具生效的函数
// 注意: 这个包是在开发环境下使用的.所以最终打包生产环境的代码的时候不会包含这个包
// 那么代码执行就会出问题 .
// 所以我们要通过代码,判断当前是开发环境还是生产环境. 动态的决定函数到底是够使用
import { composeWithDevTools } from 'redux-devtools-extension'
// process.env.NODE_ENV可以获取到当前的代码的执行环境
console.log(process.env.NODE_ENV)
// 目的是为了在redux中可以发送异步请求

// 将多个reducer合并成一个
const rootRecuder = combineReducers({
  userReducer,
  flagreducer,
})
export default createStore(
  rootRecuder,
  // {},用于初始化数据的. 这种一般不用,知道有这个功能就行了
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk)
)
