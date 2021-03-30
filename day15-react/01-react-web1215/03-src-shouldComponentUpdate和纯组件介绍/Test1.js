import React, { Component } from 'react'

export default class Test1 extends Component {
  //需求: 当count的值,大于5之后,Test1组件就不要再更新了
  shouldComponentUpdate(nextProps, nextState) {
    // 注意:
    // 在这个生命周期的钩子函数中
    // this.props 拿到的是上一次的值
    // this.state 拿到的也是上一次state的值
    // 只有nextProps和nextState才是最新的props以及state的值
    // if (this.props.count <= 4) {
    //   return true
    // } else {
    //   return false
    // }
    // console.log(this.props.count)
    // console.log(a, b)
    return true
  }
  render() {
    // 注意:在redner或是其他的生命周期钩子函数中,this.props.count一定是最新的数据
    // 但是在shouldComponentUpdate中使用this.props.count是上一次的数据
    console.log('Test1渲染了')
    return <div>test1组件: {this.props.count}</div>
  }
}
