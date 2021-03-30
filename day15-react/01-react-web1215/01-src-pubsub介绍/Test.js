import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Test extends Component {
  componentDidMount() {
    // 组件挂载成功订阅信息
    PubSub.subscribe('talk', function (msg, data) {
      console.log(msg, data)
    })
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            PubSub.publish('eat', '吃饭')
          }}
        >
          Test给son发布数据
        </button>
      </div>
    )
  }
}
