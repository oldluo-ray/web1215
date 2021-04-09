import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Modal,
  Toast,
} from 'antd-mobile'
import { createForm } from 'rc-form'

import { register } from '../../../api/register'
import './index.css'
import msg from './msg.png'

class RegisterCode extends Component {
  state = {
    isShow: false,
    isDisabled: true,
  }

  validator = (rules, value) => {
    let isDisabled = true
    if (/^\w{8,12}$/.test(value)) {
      isDisabled = false
    } else {
      isDisabled = true
    }
    this.setState({
      isDisabled,
    })
  }

  registerHandle = async () => {
    const phone = localStorage.getItem('phone')
    const password = this.props.form.getFieldValue('password')
    const res = await register(phone, password)
    // console.log(res)
    if (res.data.success) {
      this.props.history.push('/login')
    } else {
      Toast.fail('注册失败,请重新注册', 2)
    }
  }
  render() {
    const { getFieldProps } = this.props.form
    return (
      <div className="wrap">
        <NavBar
          mode="light"
          icon={<Icon type="left" color="#000" />}
          onLeftClick={() => console.log(111)}
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
            <div className="tip">请设置登录密码</div>
          </WingBlank>
          <WhiteSpace size="lg"></WhiteSpace>

          <div className="code">
            <InputItem
              {...getFieldProps('password', {
                rules: [
                  {
                    validator: this.validator,
                  },
                ],
              })}
              className="psw"
              type={this.state.isShow ? 'text' : 'password'}
              clear
              placeholder="请设置8~20位登录密码"
              extra={
                <span
                  className={
                    this.state.isShow
                      ? 'iconfont icon-yanjing'
                      : 'iconfont icon-close-eye'
                  }
                  onClick={() => {
                    this.setState({
                      isShow: !this.state.isShow,
                    })
                  }}
                ></span>
              }
            ></InputItem>
          </div>
          <WingBlank size="lg">
            <div>
              密码由8-20位字母、数字或半角符号组成，不能是10位以下纯数字/字母/半角符号，字母需区分大小写
            </div>
          </WingBlank>
          <WingBlank size="lg">
            <Button
              className="code-next"
              type="warning"
              disabled={this.state.isDisabled}
              onClick={this.registerHandle}
            >
              完成
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

export default createForm()(RegisterCode)
