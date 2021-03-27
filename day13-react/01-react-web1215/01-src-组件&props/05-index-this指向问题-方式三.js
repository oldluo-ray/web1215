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

  // es6中类当中定义函数的写法: 这种写法,是将这个函数加到了原型上
  // handle() {
  //   this.setState({
  //     count: this.state.count + 1,
  //   })
  // }

  // es7中在类里面定义函数的写法: 这种写法,是将函数直接加到了实例身上
  // 由于函数直接加到了实例上面.所以react底层想要调用这个函数,就必须使用当前组件实例.handle() 去调用. 既然是对象调用模式,那函数体中的this就指向对象
  // 代码被babel编译. 所以可以放心使用
  handle = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        {/* 当点击按钮的时候,底层相当于是对象调用 */}
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
