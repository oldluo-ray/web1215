import React, { Component, PureComponent } from 'react'

// 注意: 纯组件,虽然可以帮我们自动实现shouldComponentUpdate.但是内部比较的时候,使用的是浅层对比
// 遇到引用数据类型,比较的是地址值. 那么如果我们修改数据时,直接修改对象里面的值,那么纯组件,认为数据没有变化,所以不会更新
export default class Test extends PureComponent {
  state = {
    count: 0,
    obj: {
      name: 'zs',
    },
  }
  //返回一个整数.在min~max之间.并且包含min和max
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
  }
  render() {
    console.log('TEST组件渲染了')
    return (
      <div>
        <h3>Test组件</h3>
        <div>{this.state.count}</div>
        <div>{this.state.obj.name}</div>
        <button
          onClick={() => {
            this.setState({
              count: this.getRandomIntInclusive(1, 3),
            })
          }}
        >
          按钮
        </button>
        <button
          onClick={() => {
            // 使用纯组件时,不推荐的写法
            // const { obj } = this.state
            // obj.name = 'ls'
            // this.setState({
            //   obj,
            // })

            // 推荐的写法:
            // 注意: 未来在写代码的时候,如果要修改引用数据类型中的数据,应该根据原来的数据创建一份新的数据,然后修改新的数据里面的值.最终setState赋值时,使用新的数据

            // 强烈建议: 不管未来是不是继承了纯组件,在修改引用数据类型时,都要创建一份新的数据
            // 因为未来使用的很多第三方的包或组件,很多内部都使用了纯组件.我们没有办法辨别哪些使用了纯组件,哪些没有使用.所以直接都谨慎处理
            const { obj } = this.state
            const newObj = { ...obj } // {name:'zs'}
            newObj.name = 'ls'
            this.setState({
              obj: newObj,
            })
          }}
        >
          按钮-修改对象
        </button>
      </div>
    )
  }
}
