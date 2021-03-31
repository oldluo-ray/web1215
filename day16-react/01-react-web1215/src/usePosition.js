//自定义hook
// 有一个要求: 函数名是以useXXX命名
import { useState, useEffect } from 'react'
export default function usePosition() {
  // 定义状态
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  // 使用useEffect模拟组件的生命周期钩子函数
  useEffect(() => {
    // 挂载: 给鼠标注册事件
    window.addEventListener('mousemove', handleMove)
    return () => {
      // 卸载: 移除事件
      window.removeEventListener('mousemove', handleMove)
    }
  }, [])

  // 鼠标移动的事件处理函数
  function handleMove(e) {
    setX(e.clientX)
    setY(e.clientY)
  }

  return { x, y }
}
