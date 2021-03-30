import React, { Component } from 'react'

export default class Test extends Component {
  // 由于Test组件不需要更新,所以直接在shouldComponentUpdate中return false
  // 这样Test组件就不会再更新了.性能比较高
  shouldComponentUpdate() {
    return false
  }
  render() {
    console.log('Test渲染了')
    return <div>test组件</div>
  }
}
