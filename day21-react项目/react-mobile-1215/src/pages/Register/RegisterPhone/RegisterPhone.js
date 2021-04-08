import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  WingBlank,
  InputItem,
  Button,
  WhiteSpace,
  Modal,
} from 'antd-mobile'
export default class RegisterPhone extends Component {
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
          <WingBlank>
            <WhiteSpace size="xl"></WhiteSpace>
            <Button type="warning" disabled className="login-btn">
              下一步
            </Button>
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}
