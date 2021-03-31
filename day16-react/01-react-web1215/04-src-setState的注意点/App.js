import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0,
    msg: '123',
  }

  fn = () => {
    // 1. setState 修改数据的时候是异步执行的
    // 2. setState 连续调用会合并(第一个参数写对象的形式)
    // 3. setState 第一个参数可以是对象, 也可以是一个函数
    //    如果是函数. 这个函数是上一次数据修改完毕之后触发.所以可以接收到最新的数据
    // 4. setState 可以传入第二个参数. 第二个参数是一个函数
    //    这个函数是在数据修改完毕,并且视图更新完成触发
    // this.setState({
    //   count: 1,
    //   msg: 'abc',
    // })
    // this.setState({
    //   count: 2,
    // })
    // this.setState({
    //   count: 3,
    // })
    //合并之后的结果:
    // this.setState({
    //   count: 3,
    //   msg: 'abc'
    // })

    // this.setState((state, props) => {
    //   console.log(state, props)
    //   return {
    //     count: 1,
    //   }
    // })
    // this.setState((state, props) => {
    //   console.log(state, props)
    //   return {
    //     count: 2,
    //   }
    // })
    // this.setState((state, props) => {
    //   console.log(state, props)
    //   return {
    //     count: 3,
    //   }
    // })

    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log(this.state.count) //最新的值
    //   console.log(document.getElementById('count'))
    // })

    this.setState((state) => {
      return {
        count: state.count + 1,
      }
    })

    this.setState((state) => {
      return {
        count: state.count + 2,
      }
    })
    
    this.setState((state) => {
      return {
        count: state.count + 3,
      }
    })
  }
  render() {
    return (
      <div>
        <div id="count">{this.state.count}</div>
        {this.state.msg}
        <button onClick={this.fn}>按钮</button>
      </div>
    )
  }
}
