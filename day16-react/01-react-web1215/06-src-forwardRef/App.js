import React, { Component } from 'react'
import Test from './Test'
const testRef = React.createRef()
export default class App extends Component {
  render() {
    return (
      <div>
        {/* 如果给类组件添加一个ref属性,值为一个ref对象. ref对象.current 拿到就是这个组件的实例对象 */}
        {/* 可以给jsx标签添加ref属性,可以给类组件添加ref属性. 但是不能给函数组件添加ref属性 */}
        <Test ref={testRef}></Test>
        <button
          onClick={() => {
            console.log(testRef.current)
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}
