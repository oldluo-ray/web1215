import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// 引入路由表,然后根据路由表,动态的渲染Route组件
import routersArr from './config/routers'
// import Login from './pages/Login/Login'
// import Home from './pages/Home/Home'

import './App.css'
export default class App extends Component {
  render() {
    return (
      // 如果项目中使用了懒加载,按照react要求,必须使用Suspense组件包裹懒加载的组件.然后还要添加一个fallback属性,属性的值就是加载组件过程中,要展示的视图
      <Suspense fallback={<div>loading...</div>}>
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
          {/* 注意: 如果在标签上只需要写属性名的属性, 通过js去控制,都是赋值为true/false. 值为true,表示添加了这个属性, 值为false, 表示没有添加这个属性 */}
          {/* <Route path="/" component={Home} exact={false}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route> */}
        </Router>
      </Suspense>
    )
  }
}


import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Test></Test> */}
        <Header></Header>
      </div>
    )
  }
}
