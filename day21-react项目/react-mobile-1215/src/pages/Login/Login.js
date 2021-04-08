import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  Button,
  WhiteSpace,
} from 'antd-mobile'
console.log('login组件加载了')
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
          <WhiteSpace size="xl"></WhiteSpace>
          <WingBlank>
            <Button type="warning" disabled className="login-btn">
              登录
            </Button>
            <WhiteSpace size="xl"></WhiteSpace>
            <div className="login-register">
              <span>账户密码登录</span>
              <span>手机快速注册</span>
            </div>
          </WingBlank>

          <div className="login-other">
            <span className="line"></span>
            <span>其他登录方式</span>
            <span className="line"></span>
          </div>
          <WingBlank>
            <WingBlank>
              <div className="login-oauth">
                <i className="iconfont icon-github login-icon"></i>
                <i className="iconfont icon-wechat login-icon"></i>
                <i className="iconfont icon-qq login-icon"></i>
              </div>
            </WingBlank>
          </WingBlank>
          <WingBlank>
            <div className="login-bottom">
              未注册的手机号验证后将自动创建硅谷账号, 登录即代表您已同意
              <a href="">硅谷隐私政策</a>
            </div>
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}
