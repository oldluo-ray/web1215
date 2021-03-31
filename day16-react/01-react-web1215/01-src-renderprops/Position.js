// renderprops的写法: 直接定义一个组件
import React from 'react'
export default class Position extends React.Component {
  // 定义公共的状态和逻辑
  state = {
    x: 0,
    y: 0,
  }

  handleMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }

  componentDidMount() {
    console.log(this.props)
    window.addEventListener('mousemove', this.handleMove)
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMove)
  }

  render() {
    // 写在组件标签的属性位置的值. 使用this.props.属性名
    // 写在组件字节点位置上的值. 使用this.props.children
    return this.props.children(this.state)
  }
}
