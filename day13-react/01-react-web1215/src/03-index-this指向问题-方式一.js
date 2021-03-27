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
  }

  // 这个函数添加到哪里(加到原型上了)
  handle() {
    // 我们自定义的原型上的方法的this默认执行undefined
    // 由于此时handle是被组件实例调用的.所以,这时this指向当前组件实例
    this.setState({
      // 修改哪个数据,就写哪个数据,不修改的不用写
      count: this.state.count + 1,
    })
  }

  render() {
    // render函数会被调用多次. 所以一般不在render函数中定义函数
    return (
      <div>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            // 外层箭头函数才是真正的事件处理函数
            // 这个this其实是render的this.就指向当前组件实例
            // 当前组件实例可以调用原型上的方法
            this.handle()
          }}
        >
          +
        </button>
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
