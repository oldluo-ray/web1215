import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  // 修改任务的状态
  updateTodoIsDone = (id) => {
    return () => {
      // 将要修改的任务的id,传递给app
      const { getTodoId } = this.props

      getTodoId(id)
    }
  }

  delHandle = (id) => {
    return () => {
      this.props.getTodoIdDel(id)
    }
  }
  render() {
    const { item } = this.props
    return (
      <li>
        <label>
          {/* 虽然当前组件没有定义状态.但是这个复选框的值是被跟组件里面的数据控制的,所以也受控了 */}
          <input
            type="checkbox"
            checked={item.isDone}
            onChange={this.updateTodoIsDone(item.id)}
          />
          <span className={item.isDone ? 'done' : ''}>{item.todoName}</span>
        </label>
        <button className="btn btn-danger" onClick={this.delHandle(item.id)}>
          删除
        </button>
      </li>
    )
  }
}
