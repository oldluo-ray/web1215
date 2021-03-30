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
    window.addEventListener('mousemove', this.handleMove)
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMove)
  }

  render() {
    return this.props.render(this.state)
  }
}
