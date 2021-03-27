import React from 'react'
// 如果是react17版本,没有显式的使用React对象,就可以不引入.
// 如果是react17版本之前,就算没有显式的使用React对象,也要引入React
import ReactDOM from 'react-dom'

// 只有类组件才可以定义状态(数据)
class Header extends React.Component {
  // 在es6学习的时候,如果没有需要可以不写constructor.但是如果写了constructor.并且当前类继承了其他类,就必须在constructor中调用super()
  constructor() {
    super()
    // this就是当前组件的实例对象
    // this.state 这个属性名是固定.不能乱写
    // 值是一个对象. 对象里面就是我们要存储的数据.
    // 这些数据只能在类里面使用.外面拿不到
    this.state = {
      count: 0,
      msg: '测试',
      arr: [1, 2, 3],
    }
  }

  render() {
    // 在state里面定义的数据,基本上都是在jsx中使用.也就说要在jsx中动态渲染
    // 在render中. this也一定指向当前组件的实例

    return (
      <div>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            // 如果直接修改state里面的属性,数据可以发生变化,但是视图不会跟着变化
            // 在react类组件中,如果要修改数据,目的就是要更新视图.所以当你要修改数据的时候,就不能直接给state里面的数据赋值了
            // 应该使用我们未来最常用的方式,调用当前组件实例对象的setState方法
            // setState方法有两个作用: 1 修改数据 2. 让视图更新
            // this.state.count++
            // console.log(this.state.count)
            //
            this.setState({
              // 修改哪个数据,就写哪个数据,不修改的不用写
              count: this.state.count + 1,
            })
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
