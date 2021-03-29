import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'
export default class App extends Component {
  state = {
    list: [
      {
        id: 3,
        todoName: '吃饭',
        isDone: true,
      },
      {
        id: 2,
        todoName: '睡觉',
        isDone: true,
      },
      {
        id: 1,
        todoName: '敲代码',
        isDone: false,
      },
    ],
  }
  render() {
    const { list } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header></Header>
          <List list={list}></List>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}
