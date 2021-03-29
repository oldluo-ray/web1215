import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    return <div></div>
  }

  componentWillUnmount() {
    console.log('Test组件即将卸载')
  }
}
