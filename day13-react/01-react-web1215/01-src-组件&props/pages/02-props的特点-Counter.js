import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    console.log('构造器', this.props)
  }
  state = { count: 0 }
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>这是counter组件: {this.state.count}</h3>
        <div>
          这是外部传入的数据: {this.props.test}, {this.props.data}
        </div>
        <div>这是一个react元素: {this.props.ele}</div>

        <button
          onClick={() => {
            // 注意:props的值是只读的,不能重复赋值.如果重复赋值了,react会报错.
            // 但是如果传过来的是对象, 我们修改的是对象里面的数据,那么react就没有检测到修改props数据了,就不会报错.
            // 关于以上这一点,大家知道即可,还是不建议修改props
            // this.props.data = '新的值'
            // this.props.obj.name = 'wb'
            // this.props.obj = 'wb'
          }}
        >
          测试修改props
        </button>
      </div>
    )
  }
}
