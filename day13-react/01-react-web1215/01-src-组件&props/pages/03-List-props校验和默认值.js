import React, { Component } from 'react'
// 脚手架在下载react包的时候,就已经把prop-types下载好了,所以直接引入即可
import PropTypes from 'prop-types'

class List extends Component {
  // 添加静态属性的简写形式:
  static defaultProps = {
    list: ['a', 'b', 'c'],
  }

  render() {
    return (
      <ul>
        {this.props.list.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    )
  }
}

// 直接添加给类的属性叫做静态属性
List.propTypes = {
  // 定义规则:
  // list属性必须写,而且必须是个数组
  list: PropTypes.array.isRequired,
}

// 给List组件定义默认值
// List.defaultProps = {
//   list: ['a', 'b', 'c'],
// }

export default List
