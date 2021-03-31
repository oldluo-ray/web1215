import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>首页</h3>
        <button
          onClick={() => {
            // 点击按钮,让浏览器的路径变成/detail
            // 因为Home组件是被Route组件渲染出来的. 所以可以通过props直接拿到这个history对象
            // this.props.history.push('/detail')
            // this.props.history.replace('/detail')
            // push 和 replace的区别: push是往历史记录中加一条. replace是替换当前历史记录
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}
