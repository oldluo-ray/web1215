import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
  state = {
    todoName: '',
  }

  handle = (e) => {
    this.setState({
      todoName: e.target.value.trim(),
    })
  }

  // 按下回车之后,调用app传过来的函数,将任务名传递给app
  keyUpdaHandle = (e) => {
    const { getTodoName } = this.props
    const { todoName } = this.state
    if (e.keyCode === 13) {
      if (!todoName) return
      //将todoName传递给app组件
      getTodoName(todoName)
      this.setState({
        todoName: '',
      })
    }
  }

  render() {
    const { todoName } = this.state
    return (
      <div className="todo-header">
        <input
          type="text"
          value={todoName}
          onChange={this.handle}
          onKeyUp={this.keyUpdaHandle}
        />
      </div>
    )
  }
}
