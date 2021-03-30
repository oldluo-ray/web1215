import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      // 由于jsx语法结构要求至少有一个根标签,如果像之前一样,写div.那么div也会渲染到页面上.
      // 有时会有一些特殊的需求: 只渲染h3和p标签. 不渲染其他的标签
      // 作用: 包裹jsx结构,但是不渲染标签
      // <React.Fragment>
      //   <h3>123</h3>
      //   <p>123</p>
      // </React.Fragment>
      // 简写:
      <>
        <h3>123</h3>
        <p>123</p>
      </>
    )
  }
}
