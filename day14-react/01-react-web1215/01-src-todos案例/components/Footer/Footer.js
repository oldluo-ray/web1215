import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    const { list } = this.props
    const totalAll = list.length
    let totalDone = 0
    list.forEach((item) => {
      // if(item.isDone){
      //   totalDone++
      // }
      item.isDone && totalDone++
    })

    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={totalDone === totalAll}
            onChange={this.props.updateIsDone}
          />
        </label>
        <span>
          <span>已完成 {totalDone}</span> / 全部 {totalAll}
        </span>
        <button className="btn btn-danger" onClick={this.props.delAllDone}>
          清除已完成任务
        </button>
      </div>
    )
  }
}
