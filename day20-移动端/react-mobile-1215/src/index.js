import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// 执行一下动态计算根标签的代码
// 这样引入,就是直接让代码执行以下
import './utils/fixed'
ReactDOM.render(<App></App>, document.getElementById('root'))
