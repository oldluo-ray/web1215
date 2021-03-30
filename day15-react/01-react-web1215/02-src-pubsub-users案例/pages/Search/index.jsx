import React, { Component } from 'react'

import PubSub from 'pubsub-js'

export default class Search extends Component {
  state = { searchName: '' }

  handleChange = (e) => {
    this.setState({
      searchName: e.target.value.trim(),
    })
  }

  // 这是search按钮的事件处理函数
  handle = () => {
    // 要将state里面的searchName传递给List组件
    const { searchName } = this.state

    //PubSub.publish()
    PubSub.publish('name', searchName)
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            value={this.state.searchName}
            onChange={this.handleChange}
          />
          <button onClick={this.handle}>Search</button>
        </div>
      </section>
    )
  }
}
