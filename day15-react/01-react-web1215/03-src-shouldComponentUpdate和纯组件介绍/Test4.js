import React, { Component, PureComponent } from 'react'
// 如果当前组件,不想写shouldComponentUpdate.但是又想性能优化,就继承纯组件
// 纯组件和Component的作用几乎是一样的.但是比Component更强大. 纯组件,自动帮我们重写了shouldComponentUpdate. 而且在这个重写的钩子函数中,帮我们判断了所有的state和props
export default class Test4 extends PureComponent {
  state = {
    msg: 'test-msg',
  }

  render() {
    // 注意:在redner或是其他的生命周期钩子函数中,this.props.count一定是最新的数据
    // 但是在shouldComponentUpdate中使用this.props.count是上一次的数据
    console.log('Test4渲染了')
    return (
      <div>
        Test4组件: {this.props.count}
        <p>{this.state.msg}</p>
        <button
          onClick={() => {
            this.setState({
              msg: 'test-123123',
            })
          }}
        >
          Test4组件的按钮
        </button>
      </div>
    )
  }
}
