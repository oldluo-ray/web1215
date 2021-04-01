import React, { Component } from 'react'
import Test from './Test'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>首页</h1>
        <button
          onClick={() => {
            this.props.history.push('/about')
          }}
        >
          按钮
        </button>
        {/* Test组件不是被Route组件渲染的. 所以Test组件中无法通过this.props获取history, location, match三个对象 */}
        <Test></Test>
      </div>
    )
  }
}
