import React, { Component } from 'react'
import Test from './Test'
export default class App extends Component {
  render() {
    return (
      <div id="app">
        <p>123</p>
        <div>345</div>
        {/* 默认组件写在哪里,组件中的结构渲染到哪里 */}
        {/* 使用react-dom中的Portal技术,可以让写在第11行的Test组件的结构,最终渲染到别的地方 */}
        <Test></Test>
        <span>789</span>
      </div>
    )
  }
}
