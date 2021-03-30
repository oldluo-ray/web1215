import React, { Component } from 'react'
import Test from './Test'
import Test1 from './Test1'
import Test2 from './Test2'
export default class App extends Component {
  state = {
    count: 0,
  }
  //返回一个整数.在min~max之间.并且包含min和max
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count === nextState.count) {
      return false
    } else {
      return true
    }
  }
  render() {
    console.log('app渲染了')
    return (
      <div>
        <div>{this.state.count}</div>
        {/* <Test></Test> */}
        {/* <Test1 count={this.state.count}></Test1> */}
        <Test2 count={this.state.count}></Test2>
        <button
          onClick={() => {
            this.setState({
              count: this.getRandomIntInclusive(1, 3),
            })
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}
