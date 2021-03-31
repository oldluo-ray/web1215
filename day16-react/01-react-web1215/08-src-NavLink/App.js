import React, { Component } from 'react'
/**
 *  路由: 一套一一对应的映射规则
 *
 *  后端路由:  定义了url地址和对应的资源(数据)的规则
 * 比如: http://localhost:3000/getusers  -->  服务器接收到这个请求,就会给浏览器响应对应的用户数据
 *
 *
 *  前端路由: 定义了浏览器地址栏中路径和对应的视图的规则
 * 比如: 路径 /index  --> 首页
 *       路径 /detail --> 详情页
 *       路径 /menu  ---> 菜单页
 *
 *
 *  为什么要学习前端路由: 为了实现spa(单页面应用)
 *
 *
 *  前端路由的原理:
 *
 *   有一个history对象,监听了浏览器地址栏路径的变化.如果路径一旦发生变化了,就阻止浏览器给服务器发送请求.然后根据当前的路径,找到对应的视图,展示出来
 *
 *  history是指一个history的库. 有一个api listen 这个listen就是专门监听浏览器地址栏路径是否发生变化的
 *
 */

/**
 *
 * react-reouter-dom包的使用:
 * 1. 从这个包里面导入组件
 *  BrowserRouter 这个组件内部封装history.listen的代码 包裹整个项目的组件 注意:一个react项目,只需要写一次BrowserRouter
 *  BrowserRouter as Router 表示重新命名为Router. 重命名后,只能使用新的名字
 *
 * Link组件用来修改浏览器地址栏的路径的. Link组件中其实就包裹的是一个a标签, 并且阻止了a标签的默认行为
 *
 */
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
  NavLink,
} from 'react-router-dom'
// import { HashRouter as Router, Link, Route } from 'react-router-dom' 不推荐使用
import Home from './pages/Home'
import Detail from './pages/Detail'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            {/* 注意Link一定要写在Router的范围内 */}
            <NavLink to="/index" activeClassName="selected">
              首页
            </NavLink>
            <NavLink to="/detail" activeClassName="selected">
              详情页
            </NavLink>
            {/* 路径发生变化的时候,所有Route去和pathname进行匹配.如果前面的一个匹配成功了,也不会停止,后面还会继续匹配 */}
            {/* 
            Switch 组件的作用: 当前面的Route匹配成功了,那后面的就不会再去匹配了 性能较好
            注意: Switch主要就是用来包裹Route组件的
            */}
            {/* <Switch>
             
              <Route path="/index" component={Home}></Route>
              <Route path="/detail" component={Detail}></Route>
              <Route path="/" component={Home}></Route>
            </Switch> */}
            <Switch>
              <Route path="/index" component={Home}></Route>
              <Route path="/detail" component={Detail}></Route>
              {/* 注意: Redirect 是用来重定向, 主要是修改浏览器地址栏的路径 
                      如果要写from, 要配合Switch. 否则from没有效果
              
              */}
              <Redirect from="/index" to="/detail"></Redirect>
            </Switch>
          </div>
        </Router>
      </>
    )
  }
}
