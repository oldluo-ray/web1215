//最上面一般引入一些三方包
import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

// 最后引入样式
import './index.css'

export default class List extends Component {
  state = {
    users: [], // 获取到的用户列表
  }

  // 组件挂载成功去订阅话题
  componentDidMount() {
    this.token = PubSub.subscribe('name', async (msg, data) => {
      console.log(data)
      // 发送ajax请求

      const res = await axios({
        url: 'http://localhost:5000/search/users',
        params: {
          searchName: data,
        },
      })
      console.log(res)
      // 由于这个数据,最终要渲染.所以一定要存储到state里面
      this.setState({
        users: res.data.items,
      })
    })
  }

  // 卸载的时候,要取消订阅
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    let { users } = this.state
    if (users.length > 0) {
      return (
        <div className="row">
          {this.state.users.map((user) => (
            <div className="card" key={user.id}>
              <a target="_blank">
                <img
                  src={user.avatar_url}
                  style={{ width: 100, height: 100 }}
                />
              </a>
              <p className="card-text">{user.login}</p>
            </div>
          ))}
        </div>
      )
    }

    // 什么都不渲染,就return 一个 null
    return null
  }
}
