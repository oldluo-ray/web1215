import { createStore, applyMiddleware } from 'redux'
import userReducer from './reducer'

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
export default createStore(
  userReducer,
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk)
)
