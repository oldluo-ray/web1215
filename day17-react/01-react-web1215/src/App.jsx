import React, { Component } from 'react'
// 1. 引入Provider
import { connect } from 'react-redux'
class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>{this.props.count}</h3>
        <button
          onClick={() => {
            // 这个dispatch就是store.dispatch
            this.props.dispatch({ type: 'INCREMENT' })
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}

/**function connect(){
    return (wrappedComponent) =>{
      //连接redux
      return class extends Component{
        //将redux的数据,传递给react组件

        render(){
          return  wrappedComponent
        }
      }
    }
}*/

// 如果想在App组件中获取到redux中的数据,就要定义一个函数,将这个函数,传入到connect第一次调用的第一个参数的位置上
// 这个state就是redux中的数据
// 这个函数再第一次实例化WithApp的时候会调用一次,目的是为了将redux中的数据,通过props传给App组件
// 这个函数再redux数据发生变化了之后,也会再调用.目的是为了将redux中更新后的最新的数据,传递给App组件
function fn(state) {
  // 这个函数中必须返回一个对象
  // 对象中定义了什么属性,最终App组件通过props就可以接收到什么属性
  return {
    count: state.count,
  }
}
const WithApp = connect(fn)(App)
export default WithApp
