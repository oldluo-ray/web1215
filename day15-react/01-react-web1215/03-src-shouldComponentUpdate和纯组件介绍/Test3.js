import React, { Component } from 'react'

export default class Test3 extends Component {
  state = {
    msg: 'test-msg',
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 注意:
    // 在这个生命周期的钩子函数中
    // this.props 拿到的是上一次的值
    // this.state 拿到的也是上一次state的值
    // 只有nextProps和nextState才是最新的props以及state的值
    // 需求: 如果props中count的值发生变化了,就更新Test3.否则不更新
    // 实现逻辑: 如果原来的值和现在的值相同就不更新.否则就更新

    // 注意: 当props的数据没有发生变化,但是state的值发生变化了,那么返回值也应该是true
    if (
      this.props.count !== nextProps.count ||
      this.state.msg !== nextState.msg
    ) {
      return true
    } else {
      return false
    }
  }
  render() {
    // 注意:在redner或是其他的生命周期钩子函数中,this.props.count一定是最新的数据
    // 但是在shouldComponentUpdate中使用this.props.count是上一次的数据
    console.log('Test3渲染了')
    return (
      <div>
        Test3组件: {this.props.count}
        <p>{this.state.msg}</p>
        <button
          onClick={() => {
            this.setState({
              msg: 'test-123123',
            })
          }}
        >
          Test3组件的按钮
        </button>
      </div>
    )
  }
}
