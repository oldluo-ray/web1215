//最上面一般引入一些三方包
import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

// 中间引入一些自己定义的包
import { TOPIC } from '../../constans'

// 最后引入样式
import './index.css'

export default class List extends Component {
  //挂载成功,订阅话题
  componentDidMount() {
    // 这个token,有没有必要加到state中?
    //没有必要,因为token跟试图渲染无关
    this.token = PubSub.subscribe(TOPIC, (msg, data) => {
      // console.log('接收到数据', data)

      if (data.length === 0) return
      // 发送请求
      this.props.getData(data)
      // 没有只是用redux-thunk之前的写法
      // axios
      //   .get('http://localhost:5000/search/users', {
      //     params: {
      //       searchname: data,
      //     },
      //   })
      //   .then((res) => {
      //     console.log(res)
      //     // res.data.items
      //     // 将res.data.items存储到redux
      //     // console.log(this.props)
      //     this.props.saveData(res.data.items)
      //   })
    })
  }

  // 卸载的时候取消订阅
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }
  render() {
    console.log(this.props)
    let users = this.props.users
    let flag = this.props.flag
    let newUsers = [...users]
    // console.log(this.props)
    if (users.length > 0) {
      // 如果flag的值是zs,就对数据进行过滤
      if (flag === 'zs') {
        newUsers = newUsers.filter((item) => {
          return item.login === 'zs'
        })
      }

      return (
        <>
          <button
            onClick={() => {
              //点击按钮,修改redux中flag的值
              this.props.changeFlag('all')
            }}
          >
            all
          </button>
          <button
            onClick={() => {
              //点击按钮,修改redux中flag的值
              this.props.changeFlag('zs')
            }}
          >
            zs
          </button>
          <div className="row">
            {newUsers.map((user) => (
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
        </>
      )
    }

    // 什么都不渲染,就return 一个 null
    return null
  }
}