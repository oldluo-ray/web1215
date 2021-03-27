import React from 'react'
// 如果是react17版本,没有显式的使用React对象,就可以不引入.
// 如果是react17版本之前,就算没有显式的使用React对象,也要引入React
import ReactDOM from 'react-dom'

// 定义一个函数组件
// 小结:
// 1. 首字母要大写. 因为在使用组件的时候,react根据首字母是否大写,来判断是组件还是普通的react元素
// 2. 必须有return return后面写jsx. 或不渲染结构时写null
// 3. jsx结构,有且只有一个根标签
// function Header() {
//   // 注意: jsx有且仅有一个根标签
//   return (
//     <div>
//       <div>
//         <div className="left">
//           <span>左侧文字</span>
//         </div>
//         <div className="center">
//           <span>中间文件</span>
//         </div>
//         <div className="right">
//           <span>右侧文件</span>
//         </div>
//       </div>
//       <p>hehehe</p>
//     </div>
//   )
// }

// 类组件 (常用):
// 1. 首字母大写
// 2. 必须要继承React.Component
// 3. 必须定义一个render函数
// 4. 必须在render函数中写return
// 5. jsx有且只有一个根标签
class Header extends React.Component {
  render() {
    return (
      <div>
        <p>类组件</p>
      </div>
    )
  }
}

// 使用场景:
// 1. 如果只是简单的渲染结构和样式,就使用函数组件. 因为函数组件写起来简单
// 2. 如果组件中有一些js操作,要存储一些数据.就应该使用类组件.因为只有类组件才能在组件内部存储一些数据

//使用组件时,自闭和或双标签都可以
ReactDOM.render(<Header />, document.getElementById('root'))
