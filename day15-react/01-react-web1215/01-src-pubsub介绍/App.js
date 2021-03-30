import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Far from './Far'
import Test from './Test'
export default class App extends Component {
  componentDidMount() {
    PubSub.subscribe('eat', (msg, data) => {
      console.log('App跟组件订阅的', msg, data)
    })
  }
  render() {
    return (
      <div>
        <Far></Far>
        <Test></Test>
      </div>
    )
  }
}
