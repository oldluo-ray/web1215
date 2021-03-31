import React, { useState } from 'react'
import Test from './Test'
import Test1 from './Test1'

export default function App() {
  const [num, setNum] = useState(0)
  return (
    <div>
      {/* {num === 0 && <Test></Test>} */}
      <Test num={num}></Test>
      <Test1></Test1>
      <button
        onClick={() => {
          setNum(1)
        }}
      >
        修改app中的num属性的值
      </button>
    </div>
  )
}
