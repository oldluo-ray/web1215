import React, { Component } from 'react'

// 非受控组件的用法:
// 1. 创建ref对象
const textRef = React.createRef()
// 2. 将这个ref对象和未来要操作的真实dom所对应标签进行绑定
// 3. 通过ref对象的current属性,可以直接获取到那个真实dom
export default class Form extends Component {
  render() {
    return (
      <div>
        <input type="text" ref={textRef} />
        <button
          onClick={() => {
            console.log(textRef)
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}
