// import React from 'react'
// 如果是react17版本,没有显式的使用React对象,就可以不引入.
// 如果是react17版本之前,就算没有显式的使用React对象,也要引入React
import ReactDOM from 'react-dom'

let box = (
  <div>
    <span>hello react</span>
  </div>
)

ReactDOM.render(box, document.getElementById('root'))
