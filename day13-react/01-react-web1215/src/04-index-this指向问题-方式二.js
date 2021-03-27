import React from 'react'
// 如果是react17版本,没有显式的使用React对象,就可以不引入.
// 如果是react17版本之前,就算没有显式的使用React对象,也要引入React
import ReactDOM from 'react-dom'

// 只有类组件才可以定义状态(数据)
class Header extends React.Component {
  // 在es6学习的时候,如果没有需要可以不写constructor.但是如果写了constructor.并且当前类继承了其他类,就必须在constructor中调用super()
  constructor() {
    super()
    this.state = {
      count: 0,
      msg: '测试',
      arr: [1, 2, 3],
    }

    this.handle = this.handle.bind(this)
  }

  // 这个函数添加到哪里(加到原型上了)
  // 函数的this指向,取决于函数是怎么调用的
  // 函数的普通调用: window
  // 函数的对象调用: 对象
  // 函数做当构造器调用: 实例
  // 函数当做事件处理函数:事件源.但是react中也是undefined
  // 函数的上下文调用模式: call,apply,bind 取决于传入的对象是谁
  handle() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  // handle()
  // 对象.handle()

  render() {
    // render函数会被调用多次. 所以一般不在render函数中定义函数
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handle}>+</button>
        <p>{this.state.msg}</p>
        <p>{this.state.arr}</p>
      </div>
    )
  }
}

//使用组件时,自闭和或双标签都可以
// <Header /> 或 <Header></Header> 其实就是在 new Header()
ReactDOM.render(<Header />, document.getElementById('root'))

// 这个是静态
// Header.xxx = function(){

// }
