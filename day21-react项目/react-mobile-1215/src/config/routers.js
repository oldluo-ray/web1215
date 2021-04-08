// 目前: 我们的代码虽然分成了多个js文件去书写.但是最后打包的时候,webpack还是会将所有的js文件合成一个js文件. 这时就会存在一个问题.我们定义的所有的组件,都会一下子全部加载到内存中. 所以第一次加载时间会比较久. 我们需要实现懒加载
// import Login from '../pages/Login/Login'
// import Home from '../pages/Home/Home'

// 如何实现懒加载:
// 1. 如果要实现懒加载,有一个前提: 就是最终打包之后的代码,不能合成一个js. 我们需要将打包之后的代码还是保持一个组件对应一个js文件(这里需要用到代码分割技术)
// 2. 使用import('路径')执行代码分割, 代码分割的目的是为了懒加载. 使用React.lazy(()=>promise)去实现懒加载
import React from 'react'
const Home = React.lazy(() => import('../pages/Home/Home'))
const Login = React.lazy(() => import('../pages/Login/Login'))

// 定义路由表
const routersArr = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
]

export default routersArr
