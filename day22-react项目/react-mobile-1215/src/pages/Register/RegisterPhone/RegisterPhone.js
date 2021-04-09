import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  WingBlank,
  InputItem,
  Button,
  WhiteSpace,
  Modal,
  Toast,
} from 'antd-mobile'
// 引入表单校验的高阶组价函数
import { createForm } from 'rc-form'

import { verifyPhoneIsHave } from '../../../api/register'
class RegisterPhone extends Component {
  state = {
    isDisabled: true,
  }
  componentDidMount() {
    Modal.alert(
      '注册协议及隐私政策',
      '在您注册成为硅谷用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：',
      [
        {
          text: '不同意',
          onPress: () => this.props.history.goBack(),
          style: 'default',
        },
        {
          text: '同意',
          onPress: () => console.log('ok'),
          style: {
            backgroundColor: 'red',
            color: '#fff',
          },
        },
      ]
    )
  }

  // 这个函数是在用户输入的过程中被触发,用户输入一个字符,这个函数就会被处罚一次
  validator = (rules, value, cb) => {
    // vlaue是用户输入的内容
    // rules 是一个对象,里面存储了对应的表单项的name属性的值(这里没有使用需求)
    // cb 是一个回调函数,如果表单校验通过,需要调用这个函数,但是我们这里也不需要
    // console.log(value)
    // 判断用户输入的value是否是一个手机号
    if (/^1[3546789]\d{9}$/.test(value)) {
      // 表示校验通过(将isDisabled的值改为false)
      this.setState({
        isDisabled: false,
      })
    } else {
      //表示校验不通过
      this.setState({
        isDisabled: true,
      })
    }
  }

  // 校验手机号是否已经注册过的函数
  verifyPhone = async () => {
    // 1. 获取手机号
    const { getFieldValue } = this.props.form

    const phone = getFieldValue('phone')
    // 2. 发送异步请求,询问服务器
    const res = await verifyPhoneIsHave(phone)
    // console.log(res)
    if (res.data.success) {
      // 说明手机号可以继续注册
      Modal.alert('', '我们将发送验证码至: ' + phone, [
        {
          text: '不同意',
          style: 'default',
        },
        {
          text: '同意',
          onPress: () => {
            // 把手机号存储到localStorage里面.因为多个页面要使用,传递的话,太麻烦了
            localStorage.setItem('phone', phone)

            this.props.history.push('/register/code')
          },
          style: {
            backgroundColor: 'red',
            color: '#fff',
          },
        },
      ])
    } else {
      // 说明手机号已经注册过了
      // 先提示用户
      Toast.fail(res.data.message, 2)
      // 然后过几秒中后再跳转
      setTimeout(() => {
        this.props.history.push('/login')
      }, 2000)
    }
  }

  render() {
    // RegisterPhone这个组件被createForm包裹了所以,可以通过props获取到form对象,这个对象可以结构出来一个函数getFieldProps. 可以用来实现调单校验
    const { getFieldProps } = this.props.form
    return (
      <div className="wrap">
        <NavBar
          mode="light"
          icon={<Icon type="left" color="#000" />}
          onLeftClick={() => console.log('onLeftClick')}
        >
          硅谷注册
        </NavBar>
        <WingBlank>
          {/* 第一个参数: 相当于就是给input添加了name属性,值为phone */}
          <InputItem
            {...getFieldProps('phone', {
              rules: [
                {
                  // 添加自定义校验规则,属性必须交validator
                  // 值是一个函数
                  validator: this.validator,
                },
              ],
            })}
            placeholder="请输入手机号"
          >
            <div className="login-phone">
              <span>+86</span>
              <Icon type="down"></Icon>
            </div>
          </InputItem>
          <WingBlank>
            <WhiteSpace size="xl"></WhiteSpace>
            <Button
              type="warning"
              disabled={this.state.isDisabled}
              className="login-btn"
              onClick={this.verifyPhone}
            >
              下一步
            </Button>
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}

export default createForm()(RegisterPhone)
