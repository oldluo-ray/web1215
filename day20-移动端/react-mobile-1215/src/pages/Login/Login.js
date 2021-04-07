import React, { Component } from 'react'
import { NavBar, Icon, InputItem, WingBlank } from 'antd-mobile'

export default class Login extends Component {
  render() {
    return (
      <div className="wrap">
        <NavBar
          mode="light"
          icon={<Icon type="left" color="#000" />}
          onLeftClick={() => console.log('onLeftClick')}
        >
          硅谷注册登录
        </NavBar>
        <WingBlank>
          <InputItem placeholder="请输入手机号">
            <div className="login-phone">
              <span>+86</span>
              <Icon type="down"></Icon>
            </div>
          </InputItem>
          <div className="login-code">
            <InputItem placeholder="请输入手机验证码"></InputItem>
            <div className="login-get">获取验证码</div>
          </div>
        </WingBlank>
      </div>
    )
  }
}
