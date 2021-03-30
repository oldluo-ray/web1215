import React, { Component } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
// 引入withForm
import withForm from './withForm'

// 调用withForm
// 这个withLogin是Login的父组件, 这个父组件中有Login需要的状态和逻辑
const WithLogin = withForm(Login)
// 这个withRegister是Register的父组件, 这个父组件中有Register需要的状态和逻辑
const WithRegister = withForm(Register)
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        {/* <Login></Login>
        <Register></Register> */}
        {/* WithLogin的render中返回就是Login. 所以最终渲染的结构还是login的结构 */}
        <WithLogin></WithLogin>
        {/* WithRegister的render中返回就是Register. 所以最终渲染的结构还是Register的结构 */}
        <WithRegister></WithRegister>
      </div>
    )
  }
}
