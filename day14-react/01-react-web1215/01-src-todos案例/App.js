import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'
export default class App extends Component {
  state = {
    list: [
      {
        id: 2,
        todoName: '吃饭',
        isDone: false,
      },
      {
        id: 1,
        todoName: '睡觉',
        isDone: false,
      },
    ],
  }
  // 定义函数,用来接收header组件传递过来的任务名
  getTodoName = (todoName) => {
    // console.log(todoName)
    // 定义任务对象,将数据添加到list中
    const { list } = this.state

    // 先判断list中是否有数据,如果没有,id就直接为1. 如果有就获取第一个,根据第一个的id的值 + 1 就是新的数据的id
    let id = list.length ? list[0].id + 1 : 1

    const todoObj = {
      // id的值要求是整数,并且不重复
      id,
      todoName,
      isDone: false,
    }

    list.unshift(todoObj)

    this.setState({
      list,
    })
  }

  // 定义函数,用来接收Item组件传递过来的id
  getTodoId = (id) => {
    // 根据id,找到任务对象,修改isDone的值(取反)
    let { list } = this.state
    list.forEach((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone
      }
    })
    this.setState({
      list,
    })
  }
  // 获取id,删除任务
  getTodoIdDel = (id) => {
    // console.log(id)
    const { list } = this.state
    // filter方法用于过滤数组的数据, 返回一个过滤之后的新的数组
    // 如果在回调函数执行的时候,返回的值是true,则这条数据,添加到新数组中.
    // 如果返回的是false.则这条数据被过滤掉了
    const newList = list.filter((item) => {
      return item.id !== id
    })
    this.setState({
      list: newList,
    })
  }

  //全选复选框的事件处理函数
  updateIsDone = () => {
    // 全选按钮的选中状态,其实是由列表中的复选按钮绝对的
    // 如果列表中都选中了,那么全选一定也是选中的.点击之后,就应该让列表中的所有都变成不选中,全选也就自动变成不选中了
    // 如果列表中有一个不选中了,那么全选一定也是不选中的.点击之后,就应该让列表中的所有都变成选中,全选也就自动变成选中了

    // 要先通过数据判断,是否都选中了
    const { list } = this.state

    const newList = [...list]
    // every  如果数组中所有元素,都符合要求,就返回true
    // some  如果数组中有一个符合要求,就返回true
    const res = newList.every((item) => {
      return item.isDone
    })

    // if (res) {
    //   list.forEach((item) => {
    //     item.isDone = false
    //   })
    // } else {
    //   list.forEach((item) => {
    //     item.isDone = true
    //   })
    // }
    newList.forEach((item) => {
      item.isDone = !res
    })

    this.setState({
      list: newList,
    })
  }

  // 清除所有完成项
  delAllDone = () => {
    let { list } = this.state

    list = list.filter((item) => {
      return !item.isDone
    })

    this.setState({
      list,
    })
  }

  render() {
    const { list } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          {/* 将接收任务名的函数,通过props传递给header */}
          <Header getTodoName={this.getTodoName}></Header>

          {/*要将给list组件传递数据 */}

          {list.length > 0 && (
            <div>
              <List
                list={list}
                getTodoId={this.getTodoId}
                getTodoIdDel={this.getTodoIdDel}
              ></List>
              <Footer
                list={list}
                updateIsDone={this.updateIsDone}
                delAllDone={this.delAllDone}
              ></Footer>
            </div>
          )}
        </div>
      </div>
    )
  }
}
