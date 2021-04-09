import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  Button,
  WhiteSpace,
} from 'antd-mobile'
import { Link } from 'react-router-dom'
export default class Login extends Component {
  state = {
    number: null,
  }
  // 注意: 从login跳到country. login就卸载了. 又从country跳回到login. login重新加载了一遍
  componentDidMount() {
    // 直接打开登录页面是没有number的, 如果从country跳过来,才有number
    // console.log(this.props.location)
    if (this.props.location.state) {
      //从country调过来的
      const number = this.props.location.state.number
      this.setState({
        number,
      })
    }
  }

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
            <div
              className="login-phone"
              onClick={() => {
                this.props.history.push('/country', {
                  from: '/login',
                })
              }}
            >
              <span>+{this.state.number ? this.state.number : 86}</span>
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
              <Link to="/register/phone">手机快速注册</Link>
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
                <i
                  className="iconfont icon-github login-icon"
                  onClick={() => {
                    // 给github发送请求,要求github授权登录
                    window.location.href =
                      'https://github.com/login/oauth/authorize?client_id=9e66c440e1aea39416e0'
                  }}
                ></i>
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
