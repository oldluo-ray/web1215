import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// 需求: 将Test组件的结构,渲染到id为wrap的标签中
export default class Test extends Component {
  constructor() {
    super()
    this.container = document.createElement('div')
  }
  componentDidMount() {
    document.getElementById('wrap').appendChild(this.container)
  }

  render() {
    let node = <div id="test">test组件</div>
    return ReactDOM.createPortal(node, this.container)
  }
}
