import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  render() {
    const { item } = this.props
    return (
      <li>
        <label>
          {/* 虽然当前组件没有定义状态.但是这个复选框的值是被跟组件里面的数据控制的,所以也受控了 */}
          <input type="checkbox" checked={item.isDone} onChange={() => {}} />
          <span className={item.isDone ? 'done' : ''}>{item.todoName}</span>
        </label>
        <button className="btn btn-danger">删除</button>
      </li>
    )
  }
}
