import React, { Component } from 'react'
import { NavBar, Icon, List } from 'antd-mobile'

import { getCountry } from '../../api/common'
const Item = List.Item
export default class Country extends Component {
  state = {
    country: {},
  }
  async componentDidMount() {
    const res = await getCountry()
    // console.log(res)
    //由于这个数据要渲染,所以存储到state中
    this.setState({
      country: res.data.data,
    })
  }

  render() {
    const { country } = this.state
    // Object.keys(对象) 返回一个存放了对象中所有键的数组
    const keysArr = Object.keys(country)
    // console.log(keysArr)
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" color="#000" />}
          onLeftClick={() => console.log(111)}
        >
          硅谷登录注册
        </NavBar>
        {keysArr.map((item) => {
          // 通过item这个键,找到对应的数组
          const itemArr = country[item]

          return (
            <List renderHeader={() => item} className="my-list" key={item}>
              {itemArr.map((item) => {
                // item是对象, 如何拿到item这个对象中的key 
                const key = Object.keys(item)[0]
                return <Item extra={item[key]} key={key}>{key}</Item>
              })}
            </List>
          )
        })}
      </div>
    )
  }
}
