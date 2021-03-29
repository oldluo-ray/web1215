import React, { Component } from 'react'
import context from './context'

export default class Son extends Component {
  static contextType = context
  render() {
    console.log(this)
    return (
      <div>
        <p>
          <span>son组件</span>
          <span>爷爷给的钱:{this.context} </span>
        </p>
      </div>
    )
  }
}
