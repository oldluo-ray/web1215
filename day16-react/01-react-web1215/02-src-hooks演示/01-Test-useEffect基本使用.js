import React, { useState, useEffect } from 'react'

export default function Test() {
  //   const [状态, 设置状态的函数] = useState(初始值)
  //   状态就相当于是state里面的属性
  //   设置状态的函数,就相当于是setState
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('abc')

  // 在函数组件中模拟类组件的生命周期钩子函数
  // 挂载成功,更新完成, 即将卸载
  // componentDidMount, componentDidUpdate, componentWillUnmount
  // 外层的函数,模拟了componentDidMount 和 componentDidUpdate
  // 内层的函数, 模拟了componentWillUnmount
  // 注意: 更新之前,会先调用即将卸载的回调. 原因: 是因为外层函数表示了挂载和更新的两个钩子函数.
  // 目的: 为了保证在挂载中的事件注册或订阅...这些操作一致有效,并且不会创建多次.所以先执行卸载.然后再执行更新
  useEffect(() => {
    console.log('组件挂载/更新了')
    //挂载的时候要注册事件: onclick
    return () => {
      console.log('组件即将卸载')
      //挂载注册的事件, 要在卸载的时候移除掉 onclick=null
    }
  })

  function fn() {
    setCount(count + 1)
  }
  return (
    <div>
      {count}
      {msg}
      <button onClick={fn}>按钮</button>
      <button
        onClick={() => {
          setMsg('efg')
        }}
      >
        按钮1
      </button>
    </div>
  )
}
