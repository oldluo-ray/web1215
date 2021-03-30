import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Son extends Component {
  state = {
    msg: '及哈哈哈',
  }

  componentDidMount() {
    this.token = PubSub.subscribe('eat', (msg, data) => {
      console.log(msg, data)
    })
  }

  // 卸载时要取消订阅
  componentWillUnmount() {
    // 取消指定订阅
    PubSub.unsubscribe(this.token)
    // 取消指定话题
    // 取消所有订阅
  }

  render() {
    return (
      <div>
        <p>
          <span>son组件</span>
          <button
            onClick={() => {
              PubSub.publish('talk', this.state.msg)
            }}
          >
            son给Test发布数据
          </button>

          <button
            onClick={() => {
              PubSub.unsubscribe(this.token)
            }}
          >
            取消Son组件订阅的eat的这个指定的订阅
          </button>
          <button
            onClick={() => {
              PubSub.unsubscribe('eat')
            }}
          >
            取消eat这个话题的所有订阅
          </button>
          <button
            onClick={() => {
              PubSub.clearAllSubscriptions()
            }}
          >
            取消当前项目中所有的订阅
          </button>
        </p>
      </div>
    )
  }
}
