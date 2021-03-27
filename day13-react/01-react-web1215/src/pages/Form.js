import React, { Component } from 'react'
// 受控组件的处理方式:
export default class Form extends Component {
  state = {
    username: 'a',
    info: '',
    selected: '1',
    checked: false,
  }
  // 高阶函数:
  // 1. 把函数当做参数,传入到另一个函数中
  // 2. 把函数当做返回值,从一个另一个函数中返回出去
  // handle = (name) => {
  //   return (e) => {
  //     const value = name === 'checked' ? e.target.checked : e.target.value
  //     this.setState({
  //       [name]: value,
  //     })
  //   }
  // }
  handle = (name) => (e) => {
    const value = name === 'checked' ? e.target.checked : e.target.value
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        用户名:
        <input
          type="text"
          value={this.state.username}
          onChange={this.handle('username')}
        />
        用户介绍:
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={this.state.info}
          onChange={this.handle('info')}
        ></textarea>
        下拉框:
        <select
          name=""
          id=""
          value={this.state.selected}
          onChange={this.handle('selected')}
        >
          <option value="1">吃饭</option>
          <option value="2">吃面</option>
          <option value="3">吃粉</option>
          <option value="4">吃饼</option>
        </select>
        复选框:
        {/* 在html中可以只写属性名的属性,那么在js操作中,就是给这个属性赋值为布尔值 */}
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handle('checked')}
        />
      </div>
    )
  }
}
