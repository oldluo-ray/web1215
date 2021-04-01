import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Boys from '../pages/Boys'
import Girls from '../pages/Girls'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>首页</h3>

        <Link to="/index/girls">美女</Link>
        <Link to="/index/boys">帅哥</Link>
        {/* Route写在哪里,Route渲染的组件就渲染在哪里 */}
        {/* pathname:/index/girls */}
        {/* 注意: 如果是二级路由,那么路径要包含一级路由的路径 */}
        <Route path="/index/girls" component={Girls}></Route>
        <Route path="/index/boys" component={Boys}></Route>
      </div>
    )
  }
}
