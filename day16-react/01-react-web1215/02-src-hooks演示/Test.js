import React, { useState, useEffect } from 'react'

export default function Test(props) {
  //   const [状态, 设置状态的函数] = useState(初始值)
  //   状态就相当于是state里面的属性
  //   设置状态的函数,就相当于是setState
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('abc')
  // 虽然useEffect定义了三个生命周期钩子函数,但是实际上,最常用的就是挂载和卸载
  // 需求: 只希望useEffect模拟挂载和卸载
  // 解决办法: 在useEffect的第二个参数的位置上,传入一个空的数组
  //   useEffect(() => {
  //     console.log('组件挂载')

  //     return () => {
  //       console.log('组件即将卸载')
  //     }
  //   }, [])

  // 需求: 监听props或state的变化,如果发生变化了就更新,如果没有变化就不更新
  // 第二个参数如果里面有数据,表示监听这个数据. 如果监听的数据发生变化了,就模拟更新的钩子函数,没有监听的数据,发生变化,就不模拟更新
  useEffect(() => {
    console.log('组件挂载, 更新了')

    return () => {
      console.log('组件即将卸载')
    }
  }, [count, props.num])

  // 小结:
  //   1. useEffect 默认模拟了挂载,更新,和即将卸载三个钩子函数. 外层表示挂载和更新, 内层表示即将卸载
  //   2. 为了保证事件注册等操作不会执行多次,在更新之前先卸载一次
  //   3. useEffect 可以传入第二个参数:
  //        3.1 如果第二个参数是一个空的数组, 那表示外层只模拟挂载, 内层模拟卸载
  //        3.2 第二个参数的数组中,可以传入props或state的数据,当传入的数据发生变化了,外层函数就会模拟更新. 没有传入的数据发生变化,也不会模拟更新

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
