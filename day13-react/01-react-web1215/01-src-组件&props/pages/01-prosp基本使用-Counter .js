// import React, { Component } from 'react'

// export default class Counter extends Component {
//   state = { count: 0 }
//   render() {
//     console.log(this.props)
//     return (
//       <div>
//         <h3>这是counter组件: {this.state.count}</h3>
//         <div>
//           这是外部传入的数据: {this.props.test}, {this.props.data}
//         </div>
//       </div>
//     )
//   }
// }

import React from 'react'

// 注意: 函数组件中没有this
// 函数组件接收props,是通过形参来接收
export default function Counter(props) {
  return (
    <div>
      {props.test}, {props.data}
    </div>
  )
}
