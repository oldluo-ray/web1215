import React, { Component } from 'react'
import { inc } from './redux/actions'
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
            this.props.dispatch(inc(1))
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}
