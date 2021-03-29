import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'
export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        todoName: '吃饭',
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
  render() {
    const { list } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          {/* 将接收任务名的函数,通过props传递给header */}
          <Header getTodoName={this.getTodoName}></Header>
          <List list={list}></List>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}
