import React from 'react'
// 定义一个函数, 函数中返回一个类组件
// 注意:接收组件的形参应该写成首字母大写.因为在当前这个组件中,要直接实例Login或Register
export default function (WrappedComponent) {
  return class extends React.Component {
    // react调试工具,会优先展示组件的静态属性displayName. 如果没有值,会选择显示组件的名称(组件.name). 如果组件是一个匿名组件,调试工具,就自动创建一个名字
    // 如果我们想要自定义组件的名称.可以给组件添加一个静态属性 displayName
    static displayName = 'with' + WrappedComponent.name
    state = {
      username: '',
      password: '',
      repassword: '',
    }

    handle = (name) => {
      return (e) => {
        this.setState({
          [name]: e.target.value,
        })
      }
    }
    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          handle={this.handle}
        ></WrappedComponent>
      )
    }
  }
}
