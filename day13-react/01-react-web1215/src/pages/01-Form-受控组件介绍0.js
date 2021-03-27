import React, { Component } from 'react'
// 受控组件的处理方式:
export default class Form extends Component {
  state = {
    username: 'a',
    info: '',
    selected: '1',
    checked: false,
  }
  textHandle = (e) => {
    // console.log('表单项的值发生变化了, 那么onChange就会触发')
    // 接收用户输入的内容,然后设置给state的username属性.
    // 获取用户输入
    const value = e.target.value
    // console.log(value)
    this.setState({
      username: value,
    })
  }
  areaHandle = (e) => {
    // console.log('表单项的值发生变化了, 那么onChange就会触发')
    // 接收用户输入的内容,然后设置给state的username属性.
    // 获取用户输入
    const value = e.target.value
    // console.log(value)
    this.setState({
      info: value,
    })
  }
  selHandle = (e) => {
    // console.log('表单项的值发生变化了, 那么onChange就会触发')
    // 接收用户输入的内容,然后设置给state的username属性.
    // 获取用户输入
    const value = e.target.value
    // console.log(value)
    this.setState({
      selected: value,
    })
  }
  checkHandle = (e) => {
    // console.log('表单项的值发生变化了, 那么onChange就会触发')
    // 接收用户输入的内容,然后设置给state的username属性.
    // 获取用户输入
    const value = e.target.checked
    // console.log(value)
    this.setState({
      checked: value,
    })
  }
  render() {
    return (
      <div>
        用户名:
        <input
          type="text"
          value={this.state.username}
          onChange={this.textHandle}
        />
        用户介绍:
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={this.state.info}
          onChange={this.areaHandle}
        ></textarea>
        下拉框:
        <select
          name=""
          id=""
          value={this.state.selected}
          onChange={this.selHandle}
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
          onChange={this.checkHandle}
        />
      </div>
    )
  }
}
