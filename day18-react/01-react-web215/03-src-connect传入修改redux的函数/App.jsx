import React, { Component } from 'react'
// 因为App组件是react中的一个组件,所以就被称为是一个展示组件
export default class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        app展示组件
        <h3>{this.props.count}</h3>
        <button
          onClick={() => {
            // this.props.dispatch(inc(1))
            this.props.incre(1)
          }}
        >
          按钮
        </button>
        <button
          onClick={() => {
            // this.props.dispatch(inc(1))
            this.props.decre(2)
          }}
        >
          按钮 - n
        </button>
      </div>
    )
  }
}
