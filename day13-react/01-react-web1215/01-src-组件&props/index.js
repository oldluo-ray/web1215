import React from 'react'
// 如果是react17版本,没有显式的使用React对象,就可以不引入.
// 如果是react17版本之前,就算没有显式的使用React对象,也要引入React
import ReactDOM from 'react-dom'

import App from './App'

// 会新建文件,每一个组件,就是一个js文件. 然后会定义一个根组件,在入口文件中引入根组件,并且通过ReactDOM.render去渲染这个跟组件.如果其他组件要渲染.那就在根组件中引入,并且使用

//使用组件时,自闭和或双标签都可以
// <Header /> 或 <Header></Header> 其实就是在 new Header()
ReactDOM.render(<App></App>, document.getElementById('root'))
