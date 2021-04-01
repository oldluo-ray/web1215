import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    // 可以拿到通过查询字符串传递过来的数据
    // 但是这种方式拿到的数据是一个字符串. 操作起来不方便
    console.log(this.props.location.search)

    // 推荐使用另外一种形式
    console.log(this.props.location.state)

    // 第三种传递数据的方式: 路由参数
    // 路由参数一般用来传递一些数字数据
    // 接收路由参数:
    console.log(this.props.match.params)
    return (
      <div>
        <h3>详情页</h3>
      </div>
    )
  }
}
