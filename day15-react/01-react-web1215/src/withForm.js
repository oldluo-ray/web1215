import React from 'react'
// 定义一个函数, 函数中返回一个类组件
// 注意:接收组件的形参应该写成首字母大写.因为在当前这个组件中,要直接实例Login或Register
export default function (WrappedComponent) {
  return class extends React.Component {
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
          handle={this.handle}
        ></WrappedComponent>
      )
    }
  }
}
