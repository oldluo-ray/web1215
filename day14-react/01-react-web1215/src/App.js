import React, { Component } from 'react'
import Far from './Far'
import context from './context'

export default class App extends Component {
  state = {
    msg: '五毛钱',
  }
  render() {
    return (
      // 只要写了provider,就必须添加value属性
      // <context.Provider>
      <div>
        <Far></Far>
      </div>
      // </context.Provider>
    )
  }
}
