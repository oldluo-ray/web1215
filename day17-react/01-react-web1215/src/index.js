import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import store from './redux/store'

import App from './App'

ReactDOM.render(
  // 要使用Provider包裹整个项目的结构,然后添加属性 store 值就是我们创建的redux中的store对象
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
