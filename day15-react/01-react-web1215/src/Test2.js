import React, { Component } from 'react'

export default class Test2 extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // 注意:
    // 在这个生命周期的钩子函数中
    // this.props 拿到的是上一次的值
    // this.state 拿到的也是上一次state的值
    // 只有nextProps和nextState才是最新的props以及state的值
    // 需求: 如果props中count的值发生变化了,就更新Test2.否则不更新
    // 实现逻辑: 如果原来的值和现在的值相同就不更新.否则就更新
    if (this.props.count === nextProps.count) {
      return false
    } else {
      return true
    }
  }
  render() {
    // 注意:在redner或是其他的生命周期钩子函数中,this.props.count一定是最新的数据
    // 但是在shouldComponentUpdate中使用this.props.count是上一次的数据
    console.log('Test2渲染了')
    return <div>test2组件: {this.props.count}</div>
  }
}
