import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>首页</h3>
        <button
          onClick={() => {
            // 通过编程式导航push/replace可以实现location.state传递数据的方式
            // 注意: Link和NavLink不可以
            // 第一个参数是路径, 第二个参数是要传递的数据 一般都是一个数组
            // this.props.history.push('/detail', {键: 值})
            // this.props.history.push('/detail', { name: 'ls' })
            // this.props.history.replace('/detail', { name: 'ww' })
            this.props.history.replace('/detail/3', { name: 'ww' })
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}
