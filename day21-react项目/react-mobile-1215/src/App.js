import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// 引入路由表,然后根据路由表,动态的渲染Route组件
import routersArr from './config/routers'
// import Login from './pages/Login/Login'
// import Home from './pages/Home/Home'

import './App.css'
export default class App extends Component {
  render() {
    return (
      <Router>
        {routersArr.map((item) => {
          return (
            <Route
              path={item.path}
              component={item.component}
              key={item.path}
              exact={item.exact}
            ></Route>
          )
        })}
        {/* 注意: 如果在标签上只需要些属性名的属性, 通过js去控制,都是复制为true/false. 值为true,表示添加了这个属性, 值为false, 表示没有添加这个属性 */}
        {/* <Route path="/" component={Home} exact={false}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route> */}
      </Router>
    )
  }
}
