import { createStore, applyMiddleware } from 'redux'
import userReducer from './reducer'

// 引入redux-thunk
import thunk from 'redux-thunk'
// 目的是为了在redux中可以发送异步请求
export default createStore(userReducer, applyMiddleware(thunk))
