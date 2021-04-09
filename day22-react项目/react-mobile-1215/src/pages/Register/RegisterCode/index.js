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

// 引入表单校验的高阶组价函数
import { createForm } from 'rc-form'

import { sendCode } from '../../../api/login'
import { verifyCode } from '../../../api/register'
import './index.css'
import msg from './msg.png'
let count = 5 // 测试时用一个较短的时间,实际生产环境下使用60s. 为了方便修改,定义一个变量
class RegisterCode extends Component {
  state = {
    isActive: true,
    count,
    isDisabled: true,
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

  //只要用户输入,这个函数就会触发
  validator = (rules, value) => {
    let isDisabled = true
    if (/^\d{6}$/.test(value)) {
      // 校验通过
      isDisabled = false
    } else {
      //校验不通过
      isDisabled = true
    }

    this.setState({
      isDisabled,
    })
  }

  // 点击下一步按钮,校验验证码是否正确
  verifyCodeHandle = async () => {
    const phone = localStorage.getItem('phone')
    const code = this.props.form.getFieldValue('code')
    const res = await verifyCode(phone, code)
    // console.log(res)
    if (res.data.success) {
      // 跳到下一个页面
      this.props.history.push('/register/password')
    } else {
      Toast.fail('验证码错误', 2)
    }
  }

  render() {
    const { getFieldProps } = this.props.form
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
            <InputItem
              {...getFieldProps('code', {
                rules: [
                  {
                    validator: this.validator,
                  },
                ],
              })}
              clear
              placeholder="请输入手机验证码"
            ></InputItem>
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
            <Button
              className="code-next"
              type="warning"
              disabled={this.state.isDisabled}
              onClick={this.verifyCodeHandle}
            >
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

export default createForm()(RegisterCode)
