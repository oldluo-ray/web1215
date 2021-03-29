import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
export default class List extends Component {
  render() {
    const { list, getTodoId, getTodoIdDel } = this.props
    return (
      <ul className="todo-main">
        {/* 有多少条数据,就应该有多少个item */}
        {list.map((item) => (
          // 每一个Item组件,需要的是自己的那一份数据
          <Item
            item={item}
            key={item.id}
            getTodoId={getTodoId}
            getTodoIdDel={getTodoIdDel}
          ></Item>
        ))}
      </ul>
    )
  }
}
