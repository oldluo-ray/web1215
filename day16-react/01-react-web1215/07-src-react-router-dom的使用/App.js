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
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
// import { HashRouter as Router, Link, Route } from 'react-router-dom' 不推荐使用
import Home from './pages/Home'
import Detail from './pages/Detail'

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            {/* 注意Link一定要写在Router的范围内 */}
            <Link to="/index">首页</Link>
            <Link to="/detail">详情页</Link>

            {/* 配置路由规则 
              Route组件也要写在Router中
              path指定路由规则中的路径
              component指定路由规则中的视图  而react中每一个视图就是就是一个组件
            */}

            {/* 
              当路径发生变化的时候,Router组件会遍历所有的Route. 
              让Route的path和浏览器的地址栏的pathname进行比较 

              比较的规则: 
                模糊匹配(默认): 
                   pathname 以 path 开头即可.
                  
                 

                精确匹配: 
                   pathname 和 path 相等 
                   开启精确匹配: 在Route组件上添加一个属性exact
                   注意:添加了exact属性的Route是精确匹配
                   没有添加这个exact属性的Route还是模糊匹配
            
            
            */}
            <Route path="/" component={Home} exact></Route>
            {/* 探讨: pathname 是 /indexabc 或 /index/abc 是否可以和path /index匹配成功 
              结论: 
                pathname: /   可以
                pathname: /indexabc  不可以
                pathname: /index/abc  可以

                path: /index

                /indexabc 不能匹配 /index 
                /index/abc 可以匹配/index
                总结: pathname要和path相等或pathname比path长才有可能匹配成功. 匹配的时候是按照路径的分级去比较的
            */}
            <Route path="/index" component={Home}></Route>
            <Route path="/detail" component={Detail}></Route>
          </div>
        </Router>
      </>
    )
  }
}
