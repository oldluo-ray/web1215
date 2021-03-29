import React, { Component } from 'react'
import Test from './Test'

export default class App extends Component {
  state = {
    count: 0,
  }
  constructor() {
    super()
    console.log('创建阶段', 'constructor')
  }
  render() {
    console.log('创建/更新阶段', '重新渲染')
    return (
      <div>
        {this.state.count < 3 && <Test></Test>}
        <div>{this.state.count}</div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            })
          }}
        >
          按钮
        </button>
      </div>
    )
  }

  componentDidMount() {
    console.log('创建阶段', '挂载成功')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('更新阶段', '渲染完成')
  }
}
