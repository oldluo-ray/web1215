import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Modal,
} from 'antd-mobile'

import { sendCode } from '../../../api/login'
import './index.css'
import msg from './msg.png'
let count = 5 // 测试时用一个较短的时间,实际生产环境下使用60s. 为了方便修改,定义一个变量
export default class RegisterCode extends Component {
  state = {
    isActive: true,
    count,
  }
  componentDidMount() {
    this.sendVerifyCode()
  }

  // 封装了具体发送请求的代码
  sendVerifyCode = async () => {
    if (!this.state.isActive) return
    // 发送验证码
    const phone = localStorage.getItem('phone')
    await sendCode(phone)
    // 证明请求成功了
    this.setState({
      isActive: false,
    })

    this.timeid = setInterval(() => {
      if (this.state.count <= 1) {
        clearInterval(this.timeid)
        this.setState({
          isActive: true,
          count,
        })
        return
      }
      this.setState({
        count: this.state.count - 1,
      })
    }, 1000)
  }

  // 点击按钮再次发送请求,发送验证码
  sendCodeHandle = () => {
    this.sendVerifyCode()
  }

  render() {
    return (
      <div className="wrap">
        <NavBar
          mode="light"
          icon={<Icon type="left" color="#000" />}
          onLeftClick={console.log(111)}
        >
          硅谷注册
        </NavBar>
        <WhiteSpace size="lg"></WhiteSpace>

        <WingBlank size="lg">
          <div className="img">
            <img src={msg} alt="" />
          </div>
          <WhiteSpace size="lg"></WhiteSpace>
          <WingBlank size="lg">
            <div>
              我们将以短信或电话的形式将验证码发送给您，请注意接听0575/025/0592/010等开头的电话
            </div>
          </WingBlank>
          <WhiteSpace size="lg"></WhiteSpace>

          <div className="code">
            <InputItem clear placeholder="请输入手机验证码"></InputItem>
            <button
              className={this.state.isActive ? 'code-btn active' : 'code-btn'}
              onClick={this.sendCodeHandle}
            >
              {this.state.isActive
                ? '点击重新获取'
                : '重新发送(' + this.state.count + 's)'}
            </button>
          </div>
          <WingBlank size="lg">
            <Button className="code-next" type="warning" disabled={true}>
              下一步
            </Button>
          </WingBlank>
          <WingBlank size="lg">
            遇到问题了?
            <a href="">请联系客服</a>
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}
