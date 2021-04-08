import React, { Component } from 'react'
// 注意: 此时antd-mobile中所有的组件,都加载到了内存中
// import { Button } from 'antd-mobile'

import Login from './pages/Login/Login'
// 引入antd-mobile的样式文件
// import 'antd-mobile/dist/antd-mobile.css'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <>
        <Login></Login>
      </>
    )
  }
}
